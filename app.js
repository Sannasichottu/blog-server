import express from "express";
import mongoose from 'mongoose';
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
//import 'dotenv/config';
const app = express ();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);  
app.use("/api/blog",blogRouter);

mongoose.connect(`mongodb+srv://BlogApp:Dhosanjay7@clusters.k8lwf.mongodb.net/Blog?retryWrites=true&w=majority`).then(() =>app.listen(500)).then(()=>console.log("Connected To Database and Listening To Localhost 5000")).catch((err) => console.log(err));


