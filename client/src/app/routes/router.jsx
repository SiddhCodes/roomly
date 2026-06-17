import { createBrowserRouter } from "react-router";
import { HomePage } from "../../features/home/ui/pages/HomePage.jsx";
import { ChatLayout } from "../layouts/ChatLayout.jsx";
import { ChatPage } from "../../features/chat/ui/pages/ChatPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/chat",
    element: <ChatLayout />,
    children: [
      {
        index: true,
        element: <ChatPage />,
      },
    ],
  },
]);
