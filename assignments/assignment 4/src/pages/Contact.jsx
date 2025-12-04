import { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(null);
  const [departments, setDepartments] = useState([]);

  // Load departments from JSON for dropdown
  useEffect(() => {
    fetch("/data/departments.json")
      .then(res => res.json())
      .then(data => setDepartments(data));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form); // show output box
  };

  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      {/* CONTACT FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <select
          name="department"
          value={form.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          {departments.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          placeholder="Enter your message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* SHOW OUTPUT */}
      {submitted && (
        <div className="output">
          <h3>Submitted Details:</h3>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Department:</strong> {submitted.department}</p>
          <p><strong>Message:</strong> {submitted.message}</p>
        </div>
      )}
    </div>
  );
}
