import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ setSearch, setIsOpen }) {
  const navigate = useNavigate();

  return (
    <div className="navbar">

      {/* LEFT */}
      <div className="navbar-left">
        <span className="menu" onClick={() => setIsOpen(prev => !prev)}>
           <IoMenu />           
        </span>

        <h2 className="logo" onClick={() => navigate("/")}>
          YouTube
        </h2>
      </div>

      {/* MIDDLE */}
      <div className="navbar-middle">
        <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
        <button>
          <FaSearch />
        </button>
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        <button onClick={() => navigate("/login")}>
          {localStorage.getItem("username") || "Sign In"}
        </button>
      </div>
    </div>
  );
}
export default Navbar;




