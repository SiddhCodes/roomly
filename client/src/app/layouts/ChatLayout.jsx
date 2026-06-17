import { Outlet } from "react-router";
import { ChatHeader } from "../../features/chat/ui/components/ChatHeader.jsx";
import { MessageInput } from "../../features/chat/ui/components/MessageInput.jsx";
import { Container } from "../../shared/ui/components/Container.jsx";

export const ChatLayout = () => {
  return (
    <div>
      <Container>
        <div className="h-screen">
          <main className="flex flex-col justify-between h-full pb-4">
            <ChatHeader />
            <div className="flex-1 overflow-y-scroll hide-scrollbar">
              <Outlet />
            </div>
            <MessageInput />
          </main>
        </div>
      </Container>
    </div>
  );
};
