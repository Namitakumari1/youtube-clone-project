import API from "./axios.js";

export const getComments = async (videoId) => {
  const res = await API.get(`/comment/${videoId}`);
  return res.data;
};

export const addComment = async (commentData, token) => {
  const res = await API.post("/comment", commentData,
    {
      headers: {
        Authorization: token
      }
    }
  );
  return res.data;
};

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

