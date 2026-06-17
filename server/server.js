import http from "http";
import app from "./src/app.js";
import { initializeSocket } from "./src/socket/socket.js";

const PORT = 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
