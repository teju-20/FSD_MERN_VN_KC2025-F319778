import React, { useState, useEffect } from "react";
import axios from "axios";

function PaginationUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=20")
      .then((res) => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error loading users</p>;

  // Calculate indices for current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (indexOfLastUser < users.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List (Page {currentPage})</h2>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "80%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={currentPage === 1} style={{ padding: "5px 10px", marginRight: "10px" }}>
          Prev
        </button>
        <button onClick={handleNext} disabled={indexOfLastUser >= users.length} style={{ padding: "5px 10px" }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationUsers;
