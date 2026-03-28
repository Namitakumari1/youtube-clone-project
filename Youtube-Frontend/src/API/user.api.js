import API from "./axios";

// signup API
export const signupUser = (userData) => {
  return API.post("/user/signup", userData);
};

// login API
export const loginUser = (loginData) => {
  return API.post("/user/login", loginData);
};