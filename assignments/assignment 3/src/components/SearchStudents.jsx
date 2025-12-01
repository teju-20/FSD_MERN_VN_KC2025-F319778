import React, { useState } from "react";

const SearchStudents = () => {
  const students = [
    "Arun",
    "Bala",
    "Charan",
    "Divya",
    "Elango",
    "Farhan",
    "Gokul",
    "Hari"
  ];

  const [query, setQuery] = useState("");

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Students</h2>

      <input
        type="text"
        placeholder="Search student..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
      />

      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((name, index) => (
            <li key={index}>{name}</li>
          ))
        ) : (
          <li>No match found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchStudents;
