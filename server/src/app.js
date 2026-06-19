import express from "express";
import cors from "cors";
import env from "dotenv";
env.config();

const app = express();

console.log(process.env.VITE_SERVER_URL);

app.use(
  cors({
    origin: [process.env.VITE_SERVER_URL, "http://localhost:5173"],
    credentials: true,
  }),
);

app.use(express.json());

export default app;
