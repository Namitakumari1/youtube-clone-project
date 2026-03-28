import "./ChannelPage.css";

function ChannelPage() {
  const username = localStorage.getItem("username");

  return (
    <div className="channel-page">
      <h2>{username}'s Channel</h2>

      <div className="channel-info">
        <p>Welcome to your YouTube channel page</p>
        <p>Manage your uploaded videos here</p>
      </div>

      <div className="channel-videos">
        <h3>Your Videos</h3>
        <p>No videos uploaded yet</p>
      </div>
    </div>
  );
}

export default ChannelPage;