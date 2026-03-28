import { useNavigate } from "react-router-dom"; 
import "./Sidebar.css";

function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => navigate("/channel")}>My Channel</p>
      <p onClick={() => alert("Trending coming soon")}>Trending</p>
      <p onClick={() => alert("Subscriptions coming soon")}>Subscriptions</p>
      <p onClick={() => alert("Library coming soon")}>Library</p>
    </div>
  );
}
export default Sidebar;