import { useNavigate } from "react-router-dom";
import "./VideoCard.css";

function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    <div className="video-card" onClick={() => navigate(`/video/${video._id}`)}>
      
      <img src={video.thumbnailUrl} alt="thumbnail" />

      <div className="video-info">
        <h4>{video.title}</h4>
        <p>{video.channel?.channelName}</p>
        <p>{video.views} views</p>
      </div>

    </div>
  );
}

export default VideoCard;