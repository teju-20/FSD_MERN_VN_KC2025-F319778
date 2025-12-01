import React from "react";
import products from "../assets/data.json"; // ensure this path matches your folder structure

const ProductsFromJSON = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products From JSON</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "180px",
              borderRadius: "8px",
              background: "#f9f9f9",
              color: "#111"
            }}
          >
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsFromJSON;
