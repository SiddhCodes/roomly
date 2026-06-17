import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRoom: null,
  messages: [],
  onlineUsers: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,

  reducers: {
    setCurrentRoom: (state, action) => {
      state.currentRoom = action.payload;
    },

    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },

    clearChat: (state) => {
      state.messages = [];
      state.onlineUsers = [];
      state.currentRoom = null;

      localStorage.removeItem("chat-room");
    },
  },
});

export const {
  setCurrentRoom,
  addMessage,
  setMessages,
  setOnlineUsers,
  clearChat,
} = chatSlice.actions;

export default chatSlice.reducer;
