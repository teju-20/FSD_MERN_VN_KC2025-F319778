import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate(role === "seller" ? "/admin" : "/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={styles.input}
        />

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eye}
          >
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>

        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>

        <button onClick={handleLogin} style={styles.btn}>
          Login
        </button>

        <p
          onClick={() => navigate("/register")}
          style={styles.link}
        >
          New user? Register
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f5f9",
    padding: "20px"
  },

  card: {
    background: "white",
    padding: "28px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "360px",   // 👈 FIXED SIZE
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    fontSize: "15px"
  },

  btn: {
    width: "100%",
    padding: "12px",
    background: "#1e3a8a",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "6px"
  },

  link: {
    marginTop: "18px",
    color: "#2563eb",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "14px"
  },

  eye: {
    position: "absolute",
    right: "12px",
    top: "12px",
    cursor: "pointer",
    fontSize: "18px"
  }
};


export default Login;
