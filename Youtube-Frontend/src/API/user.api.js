import API from "./axios";

// Register a new user by sending signup details
export const signupUser = (userData) => {
  return API.post("/user/signup", userData);
};

// Login user by sending email and password
export const loginUser = (loginData) => {
  return API.post("/user/login", loginData);
};