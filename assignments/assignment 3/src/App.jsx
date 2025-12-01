import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // Start closed

  return (
    <Router>
      <div className="app-container">

        {/* ===================== NAVBAR ===================== */}
        <nav className="navbar">
          <h2 className="logo">MyWebsite</h2>

          {/* Desktop Links */}
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/product" className="nav-link">Product</Link>
          </div>

          {/* Hamburger Icon */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>

        {/* ===================== MOBILE MENU ===================== */}
        {menuOpen && (
          <div className="mobile-menu">
            <Link 
              to="/" 
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link 
              to="/product" 
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Product
            </Link>
          </div>
        )}

        {/* ===================== MAIN CONTENT ===================== */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/*" element={<Product />} />
          </Routes>
        </main>

        {/* ===================== FOOTER ===================== */}
        <footer className="footer">
          <p>© 2025 MyWebsite. Built with ❤️ by You.</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;
