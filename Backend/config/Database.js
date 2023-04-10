import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect("mongodb+srv://sah_speaks:Abhisheksvce@cluster0.teyuzuc.mongodb.net/");
  console.log(`mongodb connected with ${connection.host}`);
};
// mongodb://localhost:27017/CodeZitalDB