import React, { useState } from 'react';

export default function Logincheck() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // simple dummy login check
    if (username === "admin" && password === "123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Login Status</h2>

      {/* If NOT logged in → show login form */}
      {!isLoggedIn ? (
        <form 
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            gap: "10px"
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", borderRadius: "5px" }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "8px", borderRadius: "5px" }}
          />

          <button 
            type="submit"
            style={{ padding: "8px", borderRadius: "5px", background: "green", color: "white" }}
          >
            Login
          </button>
        </form>
      ) : (
        /* When logged in → show success message */
        <h3 style={{ color: "lightgreen" }}>Welcome back!</h3>
      )}
    </div>
  );
}
