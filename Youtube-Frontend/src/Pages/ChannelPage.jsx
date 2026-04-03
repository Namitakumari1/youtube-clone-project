import { useEffect, useState } from "react";
import "./ChannelPage.css";

function ChannelPage() {
  // Get username from localStorage
  const username = localStorage.getItem("username");

  // State for uploaded videos
  const [videos, setVideos] = useState([]);

  // Dummy data for now (replace with API later)
  useEffect(() => {
    const storedVideos = JSON.parse(
      localStorage.getItem("uploadedVideos")
    ) || [];

    setVideos(storedVideos);
  }, []);

  return (
    <div className="channel-page">

      {/* Channel heading */}
      <h2>{username ? `${username}'s Channel` : "My Channel"}</h2>

      {/* Channel info section */}
      <div className="channel-info">
        <p>Welcome to your YouTube channel page</p>
        <p>Manage your uploaded videos here</p>
        <p>Total Videos: {videos.length}</p>
      </div>

      {/* Uploaded videos section */}
      <div className="channel-videos">
        <h3>Your Videos</h3>

        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={index} className="video-card">
              <h4>{video.title}</h4>
              <p>{video.description}</p>
            </div>
          ))
        ) : (
          <p>No videos uploaded yet</p>
        )}
      </div>
    </div>
  );
}

export default ChannelPage;