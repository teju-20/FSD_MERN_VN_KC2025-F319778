import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#1e3a8a",
        color: "white"
      }}
    >
      <h2>Online Book Store</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {!user && <Link style={{ color: "white" }} to="/login">Login</Link>}

        {user && user.role === "buyer" && (
          <>
            <Link style={{ color: "white" }} to="/">Home</Link>
            <Link style={{ color: "white" }} to="/cart">Cart</Link>
            <Link style={{ color: "white" }} to="/impact">Impact</Link>
          </>
        )}

        {user && user.role === "seller" && (
          <Link style={{ color: "white" }} to="/admin">Admin</Link>
        )}

        {user && (
          <button
            onClick={logout}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
