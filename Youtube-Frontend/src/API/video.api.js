import API from "./axios";

// Get all videos
export const getVideos = async () => {
  const res = await API.get("/video");
  return res.data;
};

// Get single video
export const getVideoById = async (id) => {
  const res = await API.get(`/video/${id}`);
  return res.data;
};