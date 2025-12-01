import React, { useState } from "react";

function FruitsList() {
  // Initial state with some fruits
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
  const [newFruit, setNewFruit] = useState("");

  // Add new fruit
  const handleAddFruit = (e) => {
    e.preventDefault();
    if (newFruit.trim() === "") return;
    setFruits([...fruits, newFruit.trim()]);
    setNewFruit("");
  };

  // Delete fruit by index
  const handleDeleteFruit = (indexToDelete) => {
    setFruits(fruits.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fruits List</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {fruit}{" "}
            <button
              onClick={() => handleDeleteFruit(index)}
              style={{
                marginLeft: "10px",
                padding: "2px 6px",
                cursor: "pointer",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddFruit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Enter new fruit"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>
          Add Fruit
        </button>
      </form>
    </div>
  );
}

export default FruitsList;
