import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    // root route http://localhost:PORT
    res.send("[+] Server is Up and Running");
});

app.listen(PORT, () => console.log(`[+] Server Running on port ${PORT}`));