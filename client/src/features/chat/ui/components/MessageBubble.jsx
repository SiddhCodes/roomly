export const MessageBubble = ({ text, isMe, username }) => {
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs md:max-w-md wrap-break-words px-3 py-2 rounded-2xl ${
          isMe
            ? "bg-blue-500 text-white rounded-br-md"
            : "bg-white border border-slate-300 rounded-bl-md"
        }`}
      >
        {!isMe && (
          <p className="mb-1 text-xs font-medium text-slate-500">{username}</p>
        )}

        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};
