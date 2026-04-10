import React, { useContext, useEffect, useState } from "react";
import "./Shop.css";
import { CartContext } from "../Context/CartContext";
import axios from "axios";




export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);
 

  return (
    <div className="shop">
      <h1 className="shop-title">Shop Collection</h1>

      <div className="shop-grid">
        {products.map((item) => (
          <div className="shop-card" key={item._id}>
              <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
           

          </div>
        ))}
      </div>
    </div>
  );
}
