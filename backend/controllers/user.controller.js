import User from "../models/user.model.js";
import logger from "../utils/logger.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    // get the id of current user
    const loggedInUserId = req.user._id;

    // get all users available in database by id
    // except the current user
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); //more filtering exp: .select(["-password", "-gender"]);

    res.status(200).json(filteredUsers);
  } catch (error) {
    logger.error(error, "Error in getUsersForSidebar controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
