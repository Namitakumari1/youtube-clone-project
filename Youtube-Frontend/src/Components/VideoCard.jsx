import { useNavigate } from "react-router-dom";
import "./VideoCard.css";

// Component to display individual video details
function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    // Navigate to video details page on card click
    <div className="video-card" onClick={() => navigate(`/video/${video._id}`)}>
      {/* Video thumbnail image */}
      <img src={video.thumbnailUrl} alt="thumbnail" />

      {/* Video information */}
      <div className="video-info">
        <h4>{video.title}</h4>
        <p>{video.channel?.channelName}</p>
        <p>{video.views} views</p>
      </div>
    </div>
  );
}

export default VideoCard;