import React, { useState } from 'react'

export default function LiveInput() {

  const [username, setUsername] = useState("");
  const correctName = "Alice"; // given name

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Type the Name</h2>

      <p>Given Name: <strong>{correctName}</strong></p>

      <input
        type="text"
        placeholder="Type the name correctly"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          width: "250px",
          marginBottom: "15px"
        }}
      />

      {/* Checking correctness */}
      <h3>
        {username.length > 0 ? (
          username === correctName
            ? <span style={{ color: "lightgreen" }}>the entered name is Alice</span>
            : <span style={{ color: "red" }}>the name is not entered</span>
        ) : ""}
      </h3>

    </div>
  );
}
