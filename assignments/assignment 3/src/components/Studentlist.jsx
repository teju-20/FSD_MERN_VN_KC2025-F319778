import React, { useState } from 'react';

export default function Studentlist() {

  const students = [
    { name: 'Alice', dept: 'Computer Science', year: '3rd' },
    { name: 'Bob', dept: 'Mechanical Engineering', year: '2nd' },
    { name: 'Charlie', dept: 'Electrical Engineering', year: '4th' },
    { name: 'David', dept: 'Civil Engineering', year: '1st' },
    { name: 'Eve', dept: 'Chemical Engineering', year: '3rd' }
  ];

  const [index, setIndex] = useState(0);

  const nextStudent = () => {
    if (index < students.length - 1) setIndex(index + 1);
  };

  const prevStudent = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student List</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "12px",
          margin: "10px 0",
          borderRadius: "10px",
          background: "#f9f9f9",
          color: "#333"
        }}
      >
        <h3>{students[index].name}</h3>
        <p>Department: {students[index].dept}</p>
        <p>Year: {students[index].year}</p>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={prevStudent} disabled={index === 0}>
          Previous
        </button>

        <button onClick={nextStudent} disabled={index === students.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}
