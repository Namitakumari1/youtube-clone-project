// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from "dotenv";
// import { userRoutes } from "./routes/user.route.js";
// import { channelRoutes } from './routes/channel.route.js';
// import { videoRoutes } from './routes/video.route.js';
// import { commentRoutes } from './routes/comment.route.js';
// import cors from "cors";

// dotenv.config();

// const app = express();

// app.use(cors({
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));
// app.use(express.json());

// const port = 3000;
// app.listen(port, () => {
//     console.log("Server is running on port 3000");
// });

// const connectwithdatabase = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("Database connection is successful");
//     } catch (err) {
//         console.log(err);
//     }
// };
// connectwithdatabase();

// //routes function
// userRoutes(app);

// channelRoutes(app);

// videoRoutes(app);

// commentRoutes(app);

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


app.use(cors({
  origin: "http://localhost:5174",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// DB connection
const connectwithdatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connection is successful");
    } catch (err) {
        console.log(err);
    }
};
connectwithdatabase();

// routes
userRoutes(app);
channelRoutes(app);
videoRoutes(app);
commentRoutes(app);