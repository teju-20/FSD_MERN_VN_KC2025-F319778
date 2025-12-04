import { Link } from "react-router-dom";

export default function DepartmentCard({ dept }) {
  return (
    <div className="dept-card">

      <h3>{dept.name}</h3>

      <p className="dept-desc">
        {dept.description}
      </p>

      <Link to={`/departments/${dept.id}`} className="btn">
       View More
      </Link>


    </div>
  );
}
