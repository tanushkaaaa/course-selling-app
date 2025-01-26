import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import courseRoute from "./routes/course.route.js";
import userRoute from "./routes/user.route.js";
import adminRoute from "./routes/admin.route.js";

import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
    fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
  })
);

const port = process.env.PORT || 3000;
const DB_URI = process.env.MONGO_URI;

try{
     await mongoose.connect(DB_URI);
     console.log("Connected");
 }catch(error){
     console.log("error");
 }

 app.use("/api/v1/course",courseRoute);
 app.use("/api/v1/user",userRoute);
 app.use("/api/v1/admin",adminRoute);

 cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret: process.env.api_secret,
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})