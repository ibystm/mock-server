import dotenv from "dotenv";

dotenv.config();

export const API_KEY = process.env.API_KEY;

export const MONGO_PASSWORD = process.env.MOGO_DB_PASSWORD;

export const PORT = process.env.PORT;

export const LOCAL_PORT = 8080;
