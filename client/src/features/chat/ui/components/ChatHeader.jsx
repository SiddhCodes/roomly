import { useSelector } from "react-redux";

export const ChatHeader = () => {
  const currentRoom = useSelector((state) => state.chat.currentRoom);

  const onlineUsers = useSelector((state) => state.chat.onlineUsers);

  return (
    <header>
      <nav className="flex h-14 items-center justify-between border-b border-zinc-300 px-2">
        <div>
          <h2 className="font-medium">
            Room: {currentRoom?.roomId || "Unknown"}
          </h2>
        </div>

        <div className="text-sm text-zinc-500">
          Online: {onlineUsers.length}
        </div>
      </nav>
    </header>
  );
};
