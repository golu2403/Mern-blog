import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import userRoutes from "./router/user.router.js"


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('database is connected succesfully');

})
.catch((err)=>{
    console.log(err)
})

const app=express()


app.use("/user/api",userRoutes);






















app.listen(3000,()=>{
    console.log("server is running on port 3000")
})