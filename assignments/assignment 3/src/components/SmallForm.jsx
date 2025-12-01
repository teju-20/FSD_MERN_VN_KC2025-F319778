import React, { useState } from 'react'

export default function SmallForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh

    setSubmittedName(name);
    setSubmittedEmail(email);
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Small Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", margin: "10px", borderRadius: "8px" }}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", margin: "10px", borderRadius: "8px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginTop: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>

      {/* Display submitted values */}
      {submittedName && submittedEmail && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedName}</p>
          <p>Email: {submittedEmail}</p>
        </div>
      )}
    </div>
  );
}
