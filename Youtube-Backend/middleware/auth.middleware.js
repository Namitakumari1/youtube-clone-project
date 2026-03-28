import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user info
    req.user = decoded;

    // move to next function
    next(); 

  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
};