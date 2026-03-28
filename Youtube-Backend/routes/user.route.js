import { loginUser } from "../controllers/user.controller.js";
import { signupUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

export function userRoutes(app) {

  // Signup API
  app.post("/api/user/signup", signupUser);

  // Test API
  app.get("/api/user", (req, res) => {
    res.send("User route working");
  });

  // Login API
  app.post("/api/user/login", loginUser);

  // Protected route
  app.get("/api/user/profile", verifyToken, (req, res) => {
    res.json({
      message: "Protected route accessed",
      user: req.user
    });
  });

}

