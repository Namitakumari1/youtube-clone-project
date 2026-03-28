import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments, addComment, deleteComment, updateComment } from "../API/comment.api.js";
import { getVideoById } from "../API/video.api.js";
import "./VideoPage.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function VideoPage() {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Fetch Video
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const data = await getVideoById(id);
        setVideo(data.video);

        setLikes(data.video.likes || 0);
        setDislikes(data.video.dislikes || 0);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideo();
  }, [id]);

  // Fetch Comments
  const fetchComments = async () => {
    try {
      const data = await getComments(id);
      setComments(data.comments || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  // Add Comment
  const handleAddComment = async () => {
    if (comment.trim() === "") return;

      try {
        const token = localStorage.getItem("token");

        const response = await addComment(
          {
            text: comment,
            videoId: id
          },
          token
        );

        console.log("Comment response:", response);
                
        setComments((prev) => [...prev, response.comment]);

        setComment("");
      } catch (err) {
        console.log("Comment error:", err);
        alert("Unable to add comment");
      }
    };

    const handleDeleteComment = async (commentId) => {
      try {
        const token = localStorage.getItem("token");

        await deleteComment(commentId, token);

        setComments((prev) =>
          prev.filter((c) => c._id !== commentId)
        );
      } catch (err) {
        console.log(err);
        alert("Unable to delete comment");
      }
    };

    const handleEditComment = async (commentId, oldText) => {
      const updatedText = prompt("Edit comment", oldText);

      if (!updatedText) return;

      try {
        const token = localStorage.getItem("token");

        const res = await updateComment(
          commentId,
          { text: updatedText },
          token
        );

        setComments((prev) =>
          prev.map((c) =>
            c._id === commentId ? res.comment : c
          )
        );
      } catch (err) {
        console.log(err);
        alert("Unable to edit comment");
      }
    };

    const handleLike = () => {
      setLikes((prev) => prev + 1);
    };

    const handleDislike = () => {
      setDislikes((prev) => prev + 1);
    };

    // Loading
    if (!video) return <p>Loading...</p>;

    return (
      <div className="video-page">

        {/* Video Player */}
        <video controls className="video-player">
          <source src={video.videoUrl} type="video/mp4" />
        </video>

        {/* Title */}
        <h2>{video.title}</h2>

        {/* Channel */}
        <p className="channel">
          {video.channel?.channelName}
        </p>

        {/* Description */}
        <p>{video.description}</p>

        {/* Actions */}
        <div className="actions">
          <button onClick={handleLike}>
            <FaThumbsUp /> {likes}
          </button>

          <button onClick={handleDislike}>
            <FaThumbsDown /> {dislikes}
          </button>
        </div>

        {/* Comments */}
        <div className="comments">

          <h3>Comments</h3>

          {/* Add Comment */}
          <input type="text" placeholder="Add a comment..." value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Add</button>

          {/* Comment List */}
          {comments.length > 0 ? (
            comments.map((c) => (
              <div key={c._id}>
                <p>{c.text}</p>

                <button onClick={() => handleEditComment(c._id, c.text)}>
                  Edit
                </button>

                <button onClick={() => handleDeleteComment(c._id)}>
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