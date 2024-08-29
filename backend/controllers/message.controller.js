import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
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

    // SOCKET IO FUNCTIONALITY WILL GO HERE

    // This will run in sequence (slow)
    //await conversation.save();
    //await newMessage.save();

    // This will run in parallel (fast)
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    logger.error(error, "Error in message controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
