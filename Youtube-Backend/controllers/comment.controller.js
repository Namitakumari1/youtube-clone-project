import Comment from "../models/Comment.model.js";
import Video from "../models/Video.model.js";

// add comment to video
export const addComment = async (req, res) => {
  try {
    const { text, videoId } = req.body;

    const newComment = new Comment({
      text,
      user: req.user.userId,
      video: videoId
    });

    await newComment.save();

    await Video.findByIdAndUpdate(videoId, {
      $push: { comments: newComment._id }
    });

    res.status(201).json({
      message: "Comment added",
      comment: newComment
    });

  } catch (error) {
    res.status(500).json({
      message: "Error adding comment",
      error
    });
  }
};

// get comment of a video
export const getComments = async (req, res) => {
  try {
    const { videoId } = req.params;

    const comments = await Comment.find({ video: videoId })
      .populate("user", "username");

    res.status(200).json(comments);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching comments",
      error
    });
  }
};

//delete comment
export const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    await Comment.findByIdAndDelete(commentId);

    res.status(200).json({
      message: "Comment deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting comment",
      error
    });
  }
};

//update comment
export const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { text } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { text },
      { new: true }
    );

    res.status(200).json({
      message: "Comment updated",
      comment: updatedComment
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating comment",
      error
    });
  }
};