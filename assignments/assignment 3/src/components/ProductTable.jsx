import React from "react";
import products from "../assets/data.json"; // make sure this path is correct

export default function ProductTable() {
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Product Table</h2>

      <table
        style={{
          width: "60%",
          borderCollapse: "collapse",
          background: "white",
          color: "black",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "#ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{product.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{product.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
