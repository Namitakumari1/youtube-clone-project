import API from "./axios";

// Register a new user by sending signup details
export const signupUser = (userData) => {
  console.log(`${API}/user/signup`);
  return API.post("/user/signup", userData);
};

// Login user by sending email and password
export const loginUser = (loginData) => {
   console.log(`${API}/user/login`);
  return API.post("/user/login", loginData);
};