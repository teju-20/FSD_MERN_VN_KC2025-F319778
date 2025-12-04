import { useEffect, useState } from "react";
import DepartmentCard from "../components/DepartmentCard";

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("/data/departments.json")
      .then(res => res.json())
      .then(data => setDepartments(data));
  }, []);

  return (
    <div className="page-container">
      <h1>Our Departments</h1>

      <div className="dept-grid">
        {departments.map(dept => (
          <DepartmentCard key={dept.id} dept={dept} />
        ))}
      </div>
    </div>
  );
}
