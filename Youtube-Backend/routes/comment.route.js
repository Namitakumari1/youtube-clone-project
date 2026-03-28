import { addComment, getComments, deleteComment, updateComment } from "../controllers/comment.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

export function commentRoutes(app) {

  // add comment 
  app.post("/api/comment", verifyToken, addComment);

  // get comments 
  app.get("/api/comment/:videoId", getComments);

  // update comments
  app.put("/api/comment/:commentId", verifyToken, updateComment);

  // delete comment
  app.delete("/api/comment/:commentId", verifyToken, deleteComment);

}