import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

// It means that by hitting the
// http://localhost:5000/api/users
// first the protectRoute function
// checks the security measures and
// if everything is ok then
// getUsersForSidebar function runs
router.get("/", protectRoute, getUsersForSidebar);

export default router;
