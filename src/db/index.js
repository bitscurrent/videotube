import mongoose from "mongoose";
import { db_name, mongoDB_uri } from "../constants.js";

const connectDB = async () => {
  // Takes time to connect to database so we must use async
  try {
    // Problem might occur so try catch must be there
    const connectionInstance = await mongoose.connect(
      `${mongoDB_uri}/${db_name}`
    );
    console.log(
      `\n MongoDB connected!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
