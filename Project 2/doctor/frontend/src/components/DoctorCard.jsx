import { useState } from "react";
import API from "../services/api";

function DoctorCard({ doctor }) {
  const [date, setDate] = useState("");

  const book = async (time) => {
    if (!date) {
      alert("📅 Please select a date");
      return;
    }

    try {
      await API.post("/appointment/book", {
        doctorId: doctor.userId._id, // ✅ correct
        date,
        time,
      });

      alert("✅ Appointment requested successfully");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("❌ Booking failed");
    }
  };

  return (
    <div className="card">
      <h3>{doctor.userId?.name}</h3>
      <p><b>Specialization:</b> {doctor.specialization}</p>
      <p><b>Experience:</b> {doctor.experience} years</p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <div style={{ marginTop: 10 }}>
        {doctor.availableSlots && doctor.availableSlots.length > 0 ? (
          doctor.availableSlots.map((time) => (
            <button
              key={time}
              style={{ margin: 5 }}
              onClick={() => book(time)}
            >
              {time}
            </button>
          ))
        ) : (
          <p>No slots available</p>
        )}
      </div>
    </div>
  );
}

export default DoctorCard;
