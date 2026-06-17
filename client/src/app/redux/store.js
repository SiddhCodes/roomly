import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../../features/chat/slice/chatSlice.js";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});
