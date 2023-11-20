import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js"
import usersRoute from "./api/routes/users.js"
import hotelsRoute from "./api/routes/hotels.js"
import roomsRoute from "./api/routes/rooms.js"
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB.")
      } catch (error) {
        throw error
        }   
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!")
})


// middlewares
app.use(express.json()); // if we wonn't write this then insomnia will give error

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


// app.use((req,res,next)=>{
//     console.log("I am a middleware");
// })

app.listen(2000, () => {
    connect();
    console.log("Connected to backend.")
})



// git remote set-url origin https://github.com/gaurisharma1/MernStack-Project
