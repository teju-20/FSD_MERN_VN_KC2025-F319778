import React, { useState } from 'react'

export default function FilterProducts() {

  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Headphones", category: "Electronics" },
    { name: "T-Shirt", category: "Clothes" },
    { name: "Jeans", category: "Clothes" },
    { name: "Mobile", category: "Electronics" }
  ];

  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((item) => item.category === filter);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Filter Products</h2>

      {/* Filter Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setFilter("All")}
          style={{ marginRight: "10px", padding: "8px 15px" }}
        >
          All
        </button>

        <button
          onClick={() => setFilter("Electronics")}
          style={{ marginRight: "10px", padding: "8px 15px" }}
        >
          Electronics
        </button>

        <button
          onClick={() => setFilter("Clothes")}
          style={{ padding: "8px 15px" }}
        >
          Clothes
        </button>
      </div>

      {/* Display Filtered Items */}
      <ul>
        {filteredProducts.map((product, index) => (
          <li
            key={index}
            style={{
              background: "#333",
              padding: "10px",
              margin: "6px 0",
              borderRadius: "8px"
            }}
          >
            {product.name} — {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
