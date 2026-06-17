import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { useChat } from "../../hooks/useChat.js";
import { MessageList } from "../components/MessageList.jsx";
import { setCurrentRoom } from "../../slice/chatSlice.js";

export const ChatPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentRoom = useSelector((state) => state.chat.currentRoom);

  const messages = useSelector((state) => state.chat.messages);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (currentRoom) return;

    const roomData = localStorage.getItem("chat-room");

    if (!roomData) {
      navigate("/");
      return;
    }

    dispatch(setCurrentRoom(JSON.parse(roomData)));
  }, [currentRoom, dispatch, navigate]);

  useChat({
    roomId: currentRoom?.roomId,
    username: currentRoom?.username,
  });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-full">
      <MessageList messages={messages} />

      <div ref={bottomRef} />
    </div>
  );
};
