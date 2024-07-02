import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

const port = process.env.PORT || 5500;

dotenv.config({
  path: "./env",
});

// As we use async for connectDB so we have then and catch
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!!", error);
  });
