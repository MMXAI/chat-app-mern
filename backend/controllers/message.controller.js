import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import logger from "../utils/logger.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    // first we destructure the id from req.params
    // then we rename id as receiverId and use it
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // check if a conversation exists in database
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // if such a conversation doesn't exist in databse then we
    // create a new one in database
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        // we don't need to define the message field here
        // because it is by default an empty array
        // as we specified in models/conversation.model.js
      });
    }

    // creating a new message for putting it in databse
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // if message creation was successful
    // then push it to the proper collection
    // in databse
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // This will run in sequence (slow)
    //await conversation.save();
    //await newMessage.save();

    // This will run in parallel (fast)
    await Promise.all([conversation.save(), newMessage.save()]);

    // SOCKET IO FUNCTIONALITY WILL GO HERE
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to a specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    logger.error(error, "Error in sendMessage controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).json(conversation.messages);
  } catch (error) {
    logger.error(error, "Error in getMessages controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
