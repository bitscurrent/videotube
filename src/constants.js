import dotenv from "dotenv";

dotenv.config();

const db_name = process.env.DB_NAME;
const mongoDB_uri = process.env.MONGODB_URI;

export { db_name, mongoDB_uri };
