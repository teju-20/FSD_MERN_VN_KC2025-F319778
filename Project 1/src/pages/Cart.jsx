import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} style={{
          background: "white",
          padding: "15px",
          marginBottom: "10px",
          borderRadius: "6px"
        }}>
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>

          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer"
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
