import { createChannel, getChannel, updateChannel } from "../controllers/channel.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

export function channelRoutes(app) {

  // Create Channel API (protected)
  app.post("/api/channel", verifyToken, createChannel);

  //fetch channel API
  app.get("/api/channel/:channelId", getChannel);

  //update channel API
  app.put("/api/channel/:channelId", verifyToken, updateChannel);
}