import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSocket } from "../../../shared/socket/socket.js";
import { addMessage, setOnlineUsers } from "../slice/chatSlice.js";

export const useChat = ({ roomId, username }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!roomId || !username) return;

    const socket = getSocket();

    socket.connect();

    socket.emit("join_room", {
      roomId,
      username,
    });

    const handleReceiveMessage = (message) => {
      dispatch(addMessage(message));
    };

    const handleOnlineUsers = (users) => {
      dispatch(setOnlineUsers(users));
    };

    socket.on("receive_message", handleReceiveMessage);
    socket.on("online_users", handleOnlineUsers);

    return () => {
      socket.emit("leave_room", {
        roomId,
        username,
      });

      socket.off("receive_message", handleReceiveMessage);
      socket.off("online_users", handleOnlineUsers);
    };
  }, [dispatch, roomId, username]);
};
