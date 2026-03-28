import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../API/user.api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({email: "", password: ""});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(formData);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("username", res.data.username);

      alert("Login successful");

      navigate("/");
    } catch (error) {
      alert("Login failed");
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <h2>Login Page</h2>

      <input type="email" name="email" placeholder="Enter email" value={formData.email}
        onChange={handleChange}
      />

      <input type="password" name="password" placeholder="Enter password" value={formData.password}
        onChange={handleChange}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;