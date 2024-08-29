import mongoose from "mongoose";
import logger from "../utils/logger.js";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    logger.info("[+] Connected to MongoDB");
  } catch (error) {
    logger.fatal(error, "[-] Error connecting to MongoDB");
  }
};

export default connectToMongoDB;
