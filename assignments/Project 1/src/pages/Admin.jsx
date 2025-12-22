import { useState } from "react";

function Admin() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const handleAddBook = () => {
    if (!title || !author || !price) {
      alert("Fill all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      price,
      image: "https://via.placeholder.com/200x250?text=Book"
    };

    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));

    alert("Book added successfully");

    setTitle("");
    setAuthor("");
    setPrice("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Seller Dashboard</h2>

      <p>
        <b>Logged in as:</b> {user?.email} <br />
        <b>Role:</b> {user?.role}
      </p>

      <hr />

      <h3>Add New Book</h3>

      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ width: "300px", padding: "8px", display: "block", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        style={{ width: "300px", padding: "8px", display: "block", marginBottom: "10px" }}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        style={{ width: "300px", padding: "8px", display: "block", marginBottom: "10px" }}
      />

      <button
        onClick={handleAddBook}
        style={{
          padding: "10px 15px",
          background: "#1e3a8a",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Add Book
      </button>
    </div>
  );
}

export default Admin;
