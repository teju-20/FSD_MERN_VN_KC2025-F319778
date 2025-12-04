import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <h2 className="logo">College Portal</h2>

      <div className="nav-links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
        <NavLink to="/departments" className="link">Departments</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
      </div>
    </nav>
  );
}
