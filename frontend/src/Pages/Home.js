import React from 'react';
import './Home.css';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import hero from '../Assets/exclusive_image.jpg';
import men from '../Assets/men.png';
import women from '../Assets/women.png';
import kids from '../Assets/kids.png';
import accessories from '../Assets/accessories.png';
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p2.png';
import p3 from '../Assets/p3.png';
import p4 from '../Assets/p4.png';


export default function Home() {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
  return (
    <>   

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>Fresh Fashion for Everyone</h1>
          <p>Discover the best styles, newest trends and premium collections.</p>
          <button >Shop Now</button>
        </div>

        <div className="hero-right">
          <img src={hero} alt="" />
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="categories">
        <h2>Shop By Category</h2>

        <div className="cat-grid">

          <div className="cat-card">
            <img src={men} alt="Men" />
            <p>Men</p>
          </div>

          <div className="cat-card">
            <img src={women} alt="Women" />
            <p>Women</p>
          </div>

          <div className="cat-card">
            <img src={kids} alt="Kids" />
            <p>Kids</p>
          </div>

          <div className="cat-card">
            <img src={accessories} alt="Accessories" />
            <p>Accessories</p>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
     <section className="products">
  <h2>Trending Products</h2>

  <div className="product-grid">

    <div className="product-card">
      <img src={p1} alt="" />
      <h3>Stylish Shirt</h3>
      <p>₹999</p>
      <button onClick={() =>{addToCart({name:"Stylish Shirt",price:999,image:p1,});navigate("/cart")}}>Add to Cart</button>
    </div>

    <div className="product-card">
      <img src={p2} alt="" />
      <h3>Casual Wear</h3>
      <p>₹1299</p>
      <button onClick={() => {addToCart({name:"Casual Wear", price:1299,image:p2});navigate("/cart");}}>Add to Cart</button>
    </div>

    <div className="product-card">
      <img src={p3} alt="" />
      <h3>Kids Fashion</h3>
      <p>₹699</p>
      <button onClick={() => {addToCart({name:"Kids Fashion", price:699,image:p2});navigate("/cart");}}>Add to Cart</button>
    </div>

    <div className="product-card">
      <img src={p4} alt="" />
      <h3>Premium Jacket</h3>
      <p>₹1999</p>
      <button onClick={() => {addToCart({name:"Premium Jacket", price:1999,image:p2});navigate("/cart");}}>Add to Cart</button>
    </div>

  </div>
</section>


      {/* FEATURES */}
      <section className="features">
        <div>🚚 Fast Delivery</div>
        <div>🔒 Secure Payment</div>
        <div>💯 Best Quality</div>
        <div>📞 24/7 Support</div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>SABARI STORE</h3>
        <p>© 2026 All rights reserved</p>
      </footer>
    </>
  );
}
