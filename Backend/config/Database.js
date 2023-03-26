import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect("mongodb://localhost:27017/CodeZitalDB");
  console.log(`mongodb connected with ${connection.host}`);
};
