import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requets with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);

// App Routes
// app.get("/", (req, res) => {
//     // root route http://localhost:PORT
//     res.send("[+] Server is Up and Running");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`[+] Server Running on port ${PORT}`);
});
