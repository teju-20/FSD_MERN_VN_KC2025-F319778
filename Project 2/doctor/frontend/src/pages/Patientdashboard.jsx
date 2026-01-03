import { useEffect, useState } from "react";
import API from "../services/api";

export default function PatientDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [doctors, setDoctors] = useState([]);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    API.get("/doctor/all").then(r=>setDoctors(r.data));
    API.get(`/appointment/patient/${user._id}`).then(r=>setApps(r.data));
  }, []);

  const book = (doc, time) => {
    API.post("/appointment/book", {
      patientId: user._id,
      doctorId: doc.userId._id,
      date: new Date().toLocaleDateString(),
      time
    });
    alert("Requested");
  };

  return (
    <div>
      <h2>Patient Dashboard</h2>
      {doctors.map(d=>(
        <div key={d._id} className="card">
          <h4>{d.userId.name}</h4>
          {d.availableSlots.map(t=>(
            <button key={t} onClick={()=>book(d,t)}>{t}</button>
          ))}
        </div>
      ))}
      <h3>My Appointments</h3>
      {apps.map(a=>(
        <p key={a._id}>{a.time} - {a.status}</p>
      ))}
    </div>
  );
}
