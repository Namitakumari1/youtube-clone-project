import API from "./axios";

// Fetch all videos from backend
export const getVideos = async () => {
  const res = await API.get("/api/video");
  return res.data;
};

// Fetch a single video using its unique id
export const getVideoById = async (id) => {
  const res = await API.get(`/api/video/${id}`);
  return res.data;
};