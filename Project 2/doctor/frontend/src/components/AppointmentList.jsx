import { useEffect, useState } from "react";
import API from "../services/api";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const doctorId = localStorage.getItem("userId"); // 🔥 IMPORTANT

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (!doctorId) return;

        const res = await API.get(`/appointment/doctor/${doctorId}`);
        setAppointments(res.data);
      } catch (error) {
        console.error("Error loading appointments", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [doctorId]);

  if (loading) return <p>Loading appointments...</p>;

  return (
    <div className="container">
      <h3>Appointments</h3>

      {appointments.length === 0 && (
        <p>No appointments found</p>
      )}

      {appointments.map((a) => (
        <div className="card" key={a._id}>
          <p><b>Patient:</b> {a.patientId?.name}</p>
          <p><b>Email:</b> {a.patientId?.email}</p>
          <p><b>Date:</b> {a.date}</p>
          <p><b>Time:</b> {a.time}</p>
          <p><b>Status:</b> {a.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;
