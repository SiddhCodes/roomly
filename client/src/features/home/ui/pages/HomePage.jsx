import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentRoom } from "../../../chat/slice/chatSlice.js";
import { Container } from "../../../../shared/ui/components/Container.jsx";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomId.trim() || !username.trim()) {
      return;
    }

    const roomData = {
      roomId,
      username,
    };

    localStorage.setItem("chat-room", JSON.stringify(roomData));

    dispatch(setCurrentRoom(roomData));

    navigate("/chat");
  };

  return (
    <section>
      <Container>
        <div className="w-full h-screen flex items-center justify-center">
          <div className="max-w-sm w-full p-4 rounded-md shadow border border-zinc-300 flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-2xl font-medium">Welcome back</h2>

              <p className="text-sm font-normal text-zinc-500">
                Enter your details to start chatting.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Room ID</label>

                  <input
                    type="text"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    placeholder="Enter room id"
                    className="outline-0 border border-zinc-300 rounded-md px-2 py-1"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium">Username</label>

                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="outline-0 border border-zinc-300 rounded-md px-2 py-1"
                  />
                </div>

                <button
                  type="submit"
                  className="px-2 py-1.5 bg-black text-white rounded-md font-normal text-sm cursor-pointer"
                >
                  Join room
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
