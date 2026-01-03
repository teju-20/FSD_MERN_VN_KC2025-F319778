import { useEffect, useState } from "react";
import API from "../services/api";

export default function DoctorDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [apps, setApps] = useState([]);

  useEffect(() => {
    API.get(`/appointment/doctor/${user._id}`).then(r=>setApps(r.data));
  }, []);

  const update = (id, status) => {
    API.post("/appointment/update", { id, status });
    setApps(apps.map(a=>a._id===id?{...a,status}:a));
  };

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      {apps.map(a=>(
        <div key={a._id} className="card">
          <p>{a.patientId.name} - {a.time}</p>
          {a.status==="pending" && (
            <>
              <button onClick={()=>update(a._id,"accepted")}>Accept</button>
              <button onClick={()=>update(a._id,"rejected")}>Reject</button>
            </>
          )}
          <p>Status: {a.status}</p>
        </div>
      ))}
    </div>
  );
}
