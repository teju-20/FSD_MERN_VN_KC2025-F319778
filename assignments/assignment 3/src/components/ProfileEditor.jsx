import React, { useState } from "react";

function ProfileEditor() {
  // Profile state
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Optional: handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Profile</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
        <label style={{ marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>

        <label style={{ marginBottom: "10px" }}>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>

        <label style={{ marginBottom: "10px" }}>
          Phone:
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>

        <button type="submit" style={{ padding: "5px 10px", marginTop: "10px" }}>
          Update Profile
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>Current Profile:</h3>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phone}</p>
      </div>
    </div>
  );
}

export default ProfileEditor;
