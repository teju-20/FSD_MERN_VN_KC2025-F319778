import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DepartmentDetails() {
  const { id } = useParams(); // dynamic ID (cse, mech, it…)
  const [dept, setDept] = useState(null);

  useEffect(() => {
    fetch("/data/departments.json")
      .then(res => res.json())
      .then(data => {
        const selected = data.find((d) => d.id === id);
        setDept(selected);
      });
  }, [id]);

  // Loading state
  if (!dept) {
    return <h2 className="page-container">Loading...</h2>;
  }

  return (
    <div className="page-container details-section">

      <h1>{dept.name}</h1>

      {/* FULL DESCRIPTION */}
      <p>{dept.description}</p>

      {/* COURSES */}
      <h3>Courses Offered</h3>
      <ul>
        {dept.courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>

      {/* FACULTY */}
      <h3>Faculty Members</h3>
      <ul>
        {dept.faculty.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      {/* LABS & FACILITIES */}
      <h3>Labs & Facilities</h3>
      <ul>
        {dept.labs.map((lab) => (
          <li key={lab}>{lab}</li>
        ))}
      </ul>
    </div>
  );
}
