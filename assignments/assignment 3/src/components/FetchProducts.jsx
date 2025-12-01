import React, { useEffect, useState } from "react";

function FetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // tracks loading
  const [error, setError] = useState(false);    // tracks error

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h2>Product List</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchProducts;
