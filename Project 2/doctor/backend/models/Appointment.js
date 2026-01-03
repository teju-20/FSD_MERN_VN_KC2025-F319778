const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: String,
  time: String,
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
