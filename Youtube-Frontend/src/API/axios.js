import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

const API = axios.create({
  baseURL: "https://youtube-clone-project-7wd9.onrender.com/api"
});

export default API;