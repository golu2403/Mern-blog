import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import userRoutes from "./router/user.router.js"
import authRoutes from "./router/user.auth.js";

dotenv.config();



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('database is connected succesfully');

})
.catch((err)=>{
    console.log(err)
})

const app=express();
app.use(express.json());


app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);






















app.listen(3000,()=>{
    console.log("server is running on port 3000")
})