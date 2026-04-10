import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

// Sidebar component for page navigation
function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Navigate to home page */}
      <p onClick={() => navigate("/")}>Home</p>

      {/* Navigate to user's channel page */}
      <p onClick={() => navigate("/channel")}>My Channel</p>

      {/* Placeholder sections */}
      <p onClick={() => alert("Trending coming soon")}>Trending</p>
      <p onClick={() => alert("Subscriptions coming soon")}>Subscriptions</p>
      <p onClick={() => alert("Library coming soon")}>Library</p>
    </div>
  );
}

export default Sidebar;