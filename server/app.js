import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({
  path: "./.env",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.use("/api/v1/auth");

export default app;
