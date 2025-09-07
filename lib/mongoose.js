import mongoose from "mongoose";

import Users from "@/models/Users";

let isConnected = false;

const connectMongo = async () => {
  if (isConnected) {
    return; // bruger eksisterende forbindelse
  }

  if (!process.env.MONGO_URI) {
    throw new Error("Missing MONGO_URI env variable");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = true;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

export default connectMongo;
