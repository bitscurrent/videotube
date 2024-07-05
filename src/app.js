import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Middlewares
app.use(express.json({ limit: "16kb" })); // To receive json data from body
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // To receive data from URL
app.use(express.static("public")); // for file or image storage in server
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.router.js";

// routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register
export { app };
