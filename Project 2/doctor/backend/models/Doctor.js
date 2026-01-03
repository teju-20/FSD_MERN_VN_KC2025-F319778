const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  specialization: String,
  experience: Number,
  availableSlots: [String],
});

module.exports = mongoose.model("Doctor", DoctorSchema);
