import { ArrowUp, Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getSocket } from "../../../../shared/socket/socket.js";

export const MessageInput = () => {
  const [text, setText] = useState("");

  const currentRoom = useSelector((state) => state.chat.currentRoom);

  const handleSend = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const socket = getSocket();

    socket.emit("send_message", {
      roomId: currentRoom?.roomId,
      username: currentRoom?.username,
      text,
    });

    setText("");
  };

  return (
    <form onSubmit={handleSend}>
      <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-full border border-zinc-200 bg-white p-2 shadow">
        <button
          type="button"
          className="cursor-pointer rounded-full p-2 hover:bg-gray-100"
        >
          <Plus className="size-4" />
        </button>

        <div className="w-full">
          <input
            className="w-full py-0.5 outline-none"
            type="text"
            placeholder="Type a message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-full bg-zinc-900 p-2 text-white shadow"
        >
          <ArrowUp className="size-4" />
        </button>
      </div>
    </form>
  );
};
