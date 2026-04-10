import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ setSearch, setIsOpen }) {
  const navigate = useNavigate();

  // Get logged-in username from localStorage
  const username = localStorage.getItem("username");

  // Handle user logout and redirect to login page
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="navbar">

      {/* Left section: menu icon and app logo */}
      <div className="navbar-left">
        <span className="menu" onClick={() => setIsOpen((prev) => !prev)}>
          <IoMenu />
        </span>

        {/* Navigate to home page on logo click */}
        <h2 className="logo" onClick={() => navigate("/")}>
          YouTube
        </h2>
      </div>

      {/* Middle section: search input */}
      <div className="navbar-middle">
        <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
        <button>
          <FaSearch />
        </button>
      </div>

      {/* Right section: login/register or username/logout */}
      <div className="navbar-right">
        {username ? (
          <>
            {/* Show username after successful login */}
            <span>{username}</span>

            {/* Logout button for authenticated user */}
            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Navigate to login page */}
            <button onClick={() => navigate("/login")}>
              Login
            </button>

            {/* Navigate to signup page */}
            <button onClick={() => navigate("/signup")}>
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;