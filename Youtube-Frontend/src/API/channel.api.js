import API from "./axios.js";

// Fetch all videos uploaded by the logged-in user's channel
// Token is sent in headers for authentication
export const getChannelVideos = async (token) => {
  const res = await API.get("/channel/videos", {
    headers: {
      Authorization: token
    }
  });

  // Return response data from backend
  return res.data;
};

// Fetch channel profile details like channel name, user info, etc.
// Token is required to identify the logged-in user
export const getChannelProfile = async (token) => {
  const res = await API.get("/channel/profile", {
    headers: {
      Authorization: token
    }
  });

  // Return channel profile data
  return res.data;
};