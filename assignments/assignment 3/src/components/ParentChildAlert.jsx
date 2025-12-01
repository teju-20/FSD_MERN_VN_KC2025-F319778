import React from 'react'

export default function ParentChildAlert() {

  // Parent function
  const showAlert = () => {
    alert("Hello! This alert came from the Parent Component!");
  };

  // Child Component
  const ChildButton = ({ triggerAlert }) => {
    return (
      <button
        onClick={triggerAlert}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Click Me
      </button>
    );
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Parent & Child Alert Example</h2>

      {/* Pass function to child */}
      <ChildButton triggerAlert={showAlert} />
    </div>
  );
}
