import { getVideoById, getVideos } from "../controllers/video.controller.js";
import { createVideo } from "../controllers/video.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

export function videoRoutes(app) {

  // createVideo function
  app.post("/api/video", verifyToken, createVideo);

  app.get("/api/video", getVideos);

  app.get("/api/video/:id", getVideoById);
}