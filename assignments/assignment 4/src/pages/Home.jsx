import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to Crescent College</h1>
        <p>Your Journey to a Successful Career Begins Here</p>

        <div className="home-buttons">
          <Link to="/about" className="btn">About Us</Link>
          <Link to="/departments" className="btn">View Departments</Link>
          <Link to="/contact" className="btn">Contact</Link>
        </div>
      </section>

      {/* WHY THIS COLLEGE */}
      <section className="why">
        <h2>Why This College?</h2>

        <ul>
          <li>Top-ranked institution with NAAC A+ accreditation</li>
          <li>Highly qualified and experienced faculty</li>
          <li>State-of-the-art labs and research facilities</li>
          <li>Excellent placement opportunities</li>
        </ul>
      </section>

      {/* TOP DEPARTMENTS SECTION */}
      <section className="top-departments">
        <h2>Top Departments</h2>

        <div className="dept-grid">
          <div className="dept-card">
            <h3>Computer Science Engineering</h3>
            <p>Leading department with top placements and research focus.</p>
            <Link to="/departments/cse" className="btn">Explore</Link>
          </div>

          <div className="dept-card">
            <h3>Information Technology</h3>
            <p>Focused on modern software, networks & web technologies.</p>
            <Link to="/departments/it" className="btn">Explore</Link>
          </div>

          <div className="dept-card">
            <h3>Electronics & Communication Engineering</h3>
            <p>Strong in circuits, communication systems & embedded tech.</p>
            <Link to="/departments/ece" className="btn">Explore</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
