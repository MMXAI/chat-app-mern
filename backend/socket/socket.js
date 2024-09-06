import { Server } from "socket.io";
import http from "http";
import express from "express";
import logger from "../utils/logger.js";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  const socketLogObject = { Socket_ID: socket.id };
  logger.info(socketLogObject, "a user connected");

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. Can be used
  //  both on client and server side.
  socket.on("disconnect", () => {
    logger.info(socketLogObject, "user disconnected");
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
