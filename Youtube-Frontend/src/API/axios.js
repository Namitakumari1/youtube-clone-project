import axios from "axios";

// Create a reusable axios instance
// This sets the common base URL for all API requests
const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Export the axios instance so it can be used in all API files
export default API;