import app from "./app.js";
import { connectDB } from "./config/Database.js";
import cloudinary from "cloudinary";

import { Stats } from "./models/stats.js";
connectDB();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, () => {
  console.log(`server is working on : ${port}`);
});
