import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ setSearch, setIsOpen }) {
  const navigate = useNavigate();

  // Get logged-in username from localStorage
  const username = localStorage.getItem("username");

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="navbar">

      {/* LEFT SECTION → menu icon + logo */}
      <div className="navbar-left">
        <span
          className="menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <IoMenu />
        </span>

        <h2
          className="logo"
          onClick={() => navigate("/")}
        >
          YouTube
        </h2>
      </div>

      {/* MIDDLE SECTION → search bar */}
      <div className="navbar-middle">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>
          <FaSearch />
        </button>
      </div>

      {/* RIGHT SECTION → auth buttons */}
      <div className="navbar-right">
        {username ? (
          <>
            {/* Show username after login */}
            <span>{username}</span>

            {/* Logout button visible only when user is logged in */}
            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Login button */}
            <button onClick={() => navigate("/login")}>
              Login
            </button>

            {/* Register button */}
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