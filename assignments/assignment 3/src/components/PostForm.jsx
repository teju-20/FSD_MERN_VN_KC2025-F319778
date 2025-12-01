import React, { useState } from "react";
import axios from "axios";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title,
        body,
      });

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Post Added!");
        setTitle("");
        setBody("");
      }
    } catch (error) {
      console.error("Error adding post:", error);
      setErrorMessage("Failed to add post. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add a Post</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <label style={{ marginBottom: "10px" }}>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ padding: "5px", width: "100%", marginTop: "5px" }}
          />
        </label>

        <label style={{ marginBottom: "10px" }}>
          Body:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            rows="5"
            style={{ padding: "5px", width: "100%", marginTop: "5px" }}
          ></textarea>
        </label>

        <button type="submit" style={{ padding: "5px 10px" }}>
          Add Post
        </button>
      </form>

      {successMessage && <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
    </div>
  );
}

export default PostForm;
