import { useSelector } from "react-redux";
import { MessageBubble } from "./MessageBubble.jsx";

export const MessageList = ({ messages }) => {
  const currentRoom = useSelector((state) => state.chat.currentRoom);

  if (!messages.length) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-zinc-500">
          No messages yet. Start the conversation 👋
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 py-4">
      {messages.map((message, index) => (
        <MessageBubble
          key={message.id || index}
          text={message.text}
          username={message.username}
          isMe={message.username === currentRoom?.username}
        />
      ))}
    </div>
  );
};
