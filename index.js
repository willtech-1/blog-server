import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan"

import userRouter from "./routes/user.js"
import blogRouter from "./routes/blog.js"
import dotenv from "dotenv"

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/users', userRouter) // http://locahost:5000/users/signup
app.use('/blog', blogRouter) 
app.get('/', (req, res) => {
    res.send("Welcome to blog API...")
})

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL).then(() => {
app.listen(port, () => {
    console.log(`Server is running from port ${port}... Database connected!`);
})
}).catch((error) => {
    console.log(`error: ${error} Database did not connect...`);
})


