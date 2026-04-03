import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments, addComment, deleteComment, updateComment} from "../API/comment.api.js";
import { getVideoById } from "../API/video.api.js";
import "./VideoPage.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function VideoPage() {
  // Get video id from route params
  const { id } = useParams();

  // State variables
  const [video, setVideo] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Fetch selected video details
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const data = await getVideoById(id);

        setVideo(data.video);
        setLikes(data.video.likes || 0);
        setDislikes(data.video.dislikes || 0);
      } catch (err) {
        console.log("Video fetch error:", err);
      }
    };

    fetchVideo();
  }, [id]);

  // Fetch comments for the selected video
  const fetchComments = async () => {
    try {
      const data = await getComments(id);
      setComments(data.comments || []);
    } catch (err) {
      console.log("Comments fetch error:", err);
    }
  };

  // Fetch comments whenever video id changes
  useEffect(() => {
    fetchComments();
  }, [id]);

  // Add new comment
  const handleAddComment = async () => {
    if (comment.trim() === "") return;

    const token = localStorage.getItem("token");

    // Check if user is logged in
    if (!token) {
      alert("Please login to add comment");
      return;
    }

    try {
      const response = await addComment(
        {
          text: comment,
          videoId: id
        },
        token
      );

      // Add new comment to existing comments list
      setComments((prev) => [...prev, response.comment]);

      // Clear input field
      setComment("");
    } catch (err) {
      console.log("Comment add error:", err);
      alert("Unable to add comment");
    }
  };

  // Delete existing comment
  const handleDeleteComment = async (commentId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      await deleteComment(commentId, token);

      // Remove deleted comment from UI
      setComments((prev) =>
        prev.filter((c) => c._id !== commentId)
      );
    } catch (err) {
      console.log("Delete comment error:", err);
      alert("Unable to delete comment");
    }
  };

  // Edit existing comment
  const handleEditComment = async (commentId, oldText) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    const updatedText = prompt("Edit comment", oldText);

    if (!updatedText) return;

    try {
      const res = await updateComment(
        commentId,
        { text: updatedText },
        token
      );

      // Update comment in UI
      setComments((prev) =>
        prev.map((c) =>
          c._id === commentId ? res.comment : c
        )
      );
    } catch (err) {
      console.log("Edit comment error:", err);
      alert("Unable to edit comment");
    }
  };

  // Like video
  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  // Dislike video
  const handleDislike = () => {
    setDislikes((prev) => prev + 1);
  };

  // Loading state
  if (!video) {
    return <p>Loading video...</p>;
  }

  return (
    <div className="video-page">

      {/* Video player */}
      <video controls className="video-player">
        <source src={video.videoUrl} type="video/mp4" />
      </video>

      {/* Video title */}
      <h2>{video.title}</h2>

      {/* Channel name */}
      <p className="channel">
        {video.channel?.channelName}
      </p>

      {/* Video description */}
      <p>{video.description}</p>

      {/* Like / dislike buttons */}
      <div className="actions">
        <button onClick={handleLike}>
          <FaThumbsUp /> {likes}
        </button>

        <button onClick={handleDislike}>
          <FaThumbsDown /> {dislikes}
        </button>
      </div>

      {/* Comments section */}
      <div className="comments">
        <h3>Comments</h3>

        {/* Add comment input */}
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button onClick={handleAddComment}>
          Add
        </button>

        {/* Display all comments */}
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c._id} className="comment-card">
              <p>{c.text}</p>

              <button
                onClick={() =>
                  handleEditComment(c._id, c.text)
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  handleDeleteComment(c._id)
                }
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );
}

export default VideoPage;