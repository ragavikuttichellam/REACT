import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
         <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
