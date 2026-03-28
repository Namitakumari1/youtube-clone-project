import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import { userRoutes } from "./routes/user.route.js";
import { channelRoutes } from './routes/channel.route.js';
import { videoRoutes } from './routes/video.route.js';
import { commentRoutes } from './routes/comment.route.js';
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port 3000");
});

const connectwithdatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connection is successful");
    } catch (err) {
        console.log(err);
    }
};
connectwithdatabase();

//routes function
userRoutes(app);

channelRoutes(app);

videoRoutes(app);

commentRoutes(app);

