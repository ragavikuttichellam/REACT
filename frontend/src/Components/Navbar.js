import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">SABARI <span>STORE</span></h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>

      </div>
    </nav>
  );
}
