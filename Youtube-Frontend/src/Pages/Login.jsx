import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../API/user.api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  // State to store login form data
  const [formData, setFormData] = useState({email: "", password: ""});

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value
    });
  };

  // Handle login API call
  const handleLogin = async () => {
    try {
      const res = await loginUser(formData);

      // Store token in localStorage after successful login
      localStorage.setItem("token", res.data.token);

      // Store username in localStorage
      localStorage.setItem("username", res.data.username);

      alert("Login successful");

      // Navigate to home page after login
      navigate("/");
    } catch (error) {
      alert("Login failed");
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      {/* Login page heading */}
      <h2>Login Page</h2>

      {/* Email input field */}
      <input type="email" name="email" placeholder="Enter email" value={formData.email}
        onChange={handleChange}
      />

      {/* Password input field */}
      <input type="password" name="password" placeholder="Enter password" value={formData.password}
        onChange={handleChange}
      />

      {/* Login button */}
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;