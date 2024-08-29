import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
// Example of how to consume the below api endpoint:
// http://localhost:5000/api/messages/send/66d060dd28461e5c3eb9e5c4
// which "/send/:id" is "/send/66d060dd28461e5c3eb9e5c4"
// Infact ":id" means the id of the user who we are sending
// our message to
router.post("/send/:id", protectRoute, sendMessage);

export default router;
