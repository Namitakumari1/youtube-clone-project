import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../API/user.api";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  // State to store signup form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

const handleSignup = async () => {
  // Check empty fields
  if (!formData.username.trim() || !formData.email.trim() || !formData.password.trim()) {
    alert("All fields are required");
    return;
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(formData.email)) {
    alert("Please enter a valid email address");
    return;
  }

  try {
    // Call signup API
    await signupUser(formData);

    alert("Signup successful");

    // Navigate to login page after successful signup
    navigate("/login");
  } catch (error) {
    alert("Signup failed");
    console.log(error);
  }
};

  return (
    <div className="signup-page">
      {/* Signup page heading */}
      <h2>Register Page</h2>

      {/* Username input field */}
      <input type="text" name="username" placeholder="Enter username" value={formData.username}
        onChange={handleChange}
      />

      {/* Email input field */}
      <input type="email" name="email" placeholder="Enter email" value={formData.email}
        onChange={handleChange} required
      />

      {/* Password input field */}
      <input type="password" name="password" placeholder="Enter password" value={formData.password}
        onChange={handleChange}
      />

      {/* Register button */}
      <button onClick={handleSignup}>
        Register
      </button>
    </div>
  );
}

export default Signup;