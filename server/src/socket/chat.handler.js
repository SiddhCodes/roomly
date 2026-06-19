import { roomUsers } from "./room.store.js";

export const registerChatHandlers = (io, socket) => {
  socket.on("join_room", ({ roomId, username }) => {
    socket.join(roomId);

    socket.data.roomId = roomId;
    socket.data.username = username;

    if (!roomUsers[roomId]) {
      roomUsers[roomId] = [];
    }

    roomUsers[roomId].push({
      socketId: socket.id,
      username,
    });

    io.to(roomId).emit("online_users", roomUsers[roomId]);

    // console.log(`${username} joined ${roomId}`);
  });

  socket.on("send_message", (message) => {
    io.to(message.roomId).emit("receive_message", {
      id: Date.now(),
      username: message.username,
      text: message.text,
      createdAt: new Date(),
    });
  });

  socket.on("disconnect", () => {
    const roomId = socket.data.roomId;

    if (!roomId) return;

    roomUsers[roomId] = roomUsers[roomId]?.filter(
      (user) => user.socketId !== socket.id,
    );

    io.to(roomId).emit("online_users", roomUsers[roomId] || []);
  });
};
