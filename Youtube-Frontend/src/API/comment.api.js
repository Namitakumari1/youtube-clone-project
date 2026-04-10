import API from "./axios.js";

// Fetch all comments for a specific video using videoId
export const getComments = async (videoId) => {
  const res = await API.get(`/comment/${videoId}`);
  return res.data;
};

// Add a new comment for a video
// Token is required to identify the logged-in user
export const addComment = async (commentData, token) => {
  const res = await API.post(
    "/comment",
    commentData,
    {
      headers: {
        Authorization: token
      }
    }
  );

  return res.data;
};

// Update an existing comment using commentId
// Token is required for authorization
export const updateComment = async (commentId, updatedData, token) => {
  const res = await API.put(
    `/comment/${commentId}`,
    updatedData,
    {
      headers: {
        Authorization: token
      }
    }
  );

  return res.data;
};

// Delete a comment using commentId
// Token is required to verify the user
export const deleteComment = async (commentId, token) => {
  const res = await API.delete(
    `/comment/${commentId}`,
    {
      headers: {
        Authorization: token
      }
    }
  );

  return res.data;
};