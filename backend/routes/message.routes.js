import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// protectRoute will check the user request to /send/:id
// and if it passes the security measures then the
// sendMessage handler will be executed
router.post("/send/:id", protectRoute, sendMessage);

export default router;
