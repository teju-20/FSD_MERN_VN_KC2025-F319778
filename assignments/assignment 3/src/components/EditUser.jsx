import React, { useState, useEffect } from "react";
import axios from "axios";

function EditUser() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch user details
    axios.get("https://dummyjson.com/users/1")
      .then((res) => {
        setUser({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          phone: res.data.phone
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setErrorMessage("Failed to load user.");
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    axios.put("https://dummyjson.com/users/1", user)
      .then((res) => {
        console.log("Updated user:", res.data);
        setSuccessMessage("User updated successfully!");
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        setErrorMessage("Failed to update user.");
      });
  };

  if (loading) return <p>Loading user...</p>;
  if (errorMessage) return <p style={{ color: "red" }}>{errorMessage}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit User</h2>

      <form onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <label style={{ marginBottom: "10px" }}>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            style={{ padding: "5px", marginTop: "5px", width: "100%" }}
          />
        </label>

        <label style={{ marginBottom: "10px" }}>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            style={{ padding: "5px", marginTop: "5px", width: "100%" }}
          />
        </label>

        <label style={{ marginBottom: "10px" }}>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            style={{ padding: "5px", marginTop: "5px", width: "100%" }}
          />
        </label>

        <label style={{ marginBottom: "10px" }}>
          Phone:
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            style={{ padding: "5px", marginTop: "5px", width: "100%" }}
          />
        </label>

        <button type="submit" style={{ padding: "5px 10px", marginTop: "10px" }}>
          Update User
        </button>
      </form>

      {successMessage && <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
    </div>
  );
}

export default EditUser;
