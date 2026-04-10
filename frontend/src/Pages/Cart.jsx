

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./Cart.css";
export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const buyNow = () => {
    if (cart.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    alert("✅ Order Placed Successfully!\nThank you for shopping with Sabari Store 🛒");

    // Clear cart after buying
    window.location.href = "/";
  };
  const total = cart.reduce(
    (sum, item) => sum + item.price  * item.qty,
    0
  );


  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} />

              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>₹ {Math.round(item.price )}</p>

               
                <button
                  style={removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
      ))}
        <h2 className="total">Total: ₹ {Math.round(total)}</h2>
        </>
      )}

      <br />
      <button onClick={buyNow} style={buyBtn}>
        Buy Now
      </button>
    </div>
  );
}


const buyBtn = {
  background: "green",
  color: "white",
  padding: "12px 30px",
  border: 0,
  borderRadius: 5,
  fontSize: 16,
  cursor: "pointer"
};

const removeBtn = {
  background: "red",
  color: "white",
  padding: "12px 30px",
  border: 0,
  borderRadius: 5,
  fontSize: 16,
  cursor: "pointer"
};
