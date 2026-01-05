import dotenv from "dotenv";
import connectDb from "./db/dbConnection.js";

dotenv.config({
  path: "./.env",
});

connectDb();
