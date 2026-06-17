import { Server } from "socket.io";
import { registerChatHandlers } from "./chat.handler.js";

export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    registerChatHandlers(io, socket);
  });
};
