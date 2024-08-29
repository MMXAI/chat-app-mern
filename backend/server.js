import express from "express";
import dotenv from "dotenv";
import logger from "./utils/logger.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requets with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// App Routes
// app.get("/", (req, res) => {
//     // root route http://localhost:PORT
//     res.send("[+] Server is Up and Running");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  logger.info(`[+] Server Running on port ${PORT}`);
});
