import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful ✅");
      navigate("/shop");

    } catch (err) {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div style={box}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}



const box = {
  maxWidth: 300,
  margin: "80px auto",
  textAlign: "center",
  padding: 20,
  border: "1px solid #ccc",
  borderRadius: 10
};