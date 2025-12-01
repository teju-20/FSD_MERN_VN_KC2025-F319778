import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductTable from "../components/ProductTable.jsx";
import FilterProducts from "../components/FilterProducts.jsx";
import FetchProducts from "../components/FetchProducts.jsx";
import ProductsFromJSON from "../components/ProductsFromJSON.jsx";

function Product() {
  return (
    <div className="products-page">
      <h2>Products Page</h2>
      <nav className="sub-nav" typer="dropdownmenu">
        <Link to="electronics" className="sub-link">Electronics</Link>
        <Link to="fashion" className="sub-link">Fashion</Link>
      </nav>
      <Routes>
        <Route path="electronics" element={<Electronics />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="/" element={<p>Select a category above.</p>} />
      </Routes>

      <section className="component-section">
        <h2>Products</h2>
        <ProductTable />
        <FilterProducts />
        <FetchProducts />
        <ProductsFromJSON />
      </section>
    </div>
  );
}

function Electronics() {
  return <p>Showing Electronics products here.</p>;
}

function Fashion() {
  return <p>Showing Fashion products here.</p>;
}

export default Product;
