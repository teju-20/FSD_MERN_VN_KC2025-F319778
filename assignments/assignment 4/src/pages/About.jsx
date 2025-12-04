export default function About() {
  return (
    <div className="page-container">

      {/* HEADER */}
      <h1>About Our College</h1>

      {/* HISTORY SECTION */}
      <section className="about-section">
        <h2>College History</h2>
        <p>
          Established in 1990, Crescent College has grown into one of the leading 
          institutions in India, known for its strong academic foundation, 
          advanced infrastructure, and commitment to excellence.
          Over the years, the college has produced highly successful graduates
          who have excelled in various industries worldwide.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-section">
        <h2>Mission & Vision</h2>
        <p><strong>Mission:</strong> To deliver high-quality education and empower students 
        with technical knowledge, innovative thinking, and leadership skills.</p>

        <p><strong>Vision:</strong> To evolve as a global educational center of excellence 
        with a focus on research, industry collaboration, and real-world learning.</p>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="about-section">
        <h2>Achievements</h2>

        <div className="achievement-cards">

          <div className="achievement-card">
            <h3>NAAC A+ Accreditation</h3>
            <p>Recognized for excellence in academics, infrastructure & research.</p>
          </div>

          <div className="achievement-card">
            <h3>Top 10 Engineering College</h3>
            <p>Ranked among the best engineering colleges in India.</p>
          </div>

          <div className="achievement-card">
            <h3>100+ Research Publications</h3>
            <p>Faculty and students actively contribute to global research.</p>
          </div>

          <div className="achievement-card">
            <h3>Excellent Placements</h3>
            <p>Leading companies recruit students with high salary packages.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
