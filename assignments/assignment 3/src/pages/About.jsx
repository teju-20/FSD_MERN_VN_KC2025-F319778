import React from "react";
import Studentlist from "../components/Studentlist.jsx";
import SearchStudents from "../components/SearchStudents.jsx";
import ProfileCard from "../components/ProfileCard.jsx";

function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>About Page</h2>
      <p>Welcome to the About page of our website. Here you can find information about our mission, values, and team.</p>
      <p>We are committed to providing the best services to our users and continuously improving our platform.</p>
       <section className="component-section">
        <h2>Students & Search</h2>
        <Studentlist />
        <SearchStudents />
      </section>

      <section className="component-section profile-cards">
        <h2>Profile Cards</h2>
        <br/>
        <br/>
        <ProfileCard
          image="https://randomuser.me/api/portraits/men/32.jpg"
          name="John Doe"
          role="Software Engineer"
        />
        <ProfileCard
          image="https://randomuser.me/api/portraits/women/44.jpg"
          name="Jane Smith"
          role="Product Manager"
        />
        <ProfileCard
          image="https://randomuser.me/api/portraits/men/76.jpg"
          name="Mike Johnson"
          role="UX Designer"
        />
      </section>
    </div>
  );
}

export default About;
