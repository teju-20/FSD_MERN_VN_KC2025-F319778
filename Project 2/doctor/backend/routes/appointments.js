const router = require("express").Router();
const Appointment = require("../models/Appointment");

router.post("/book", async (req, res) => {
  await Appointment.create(req.body);
  res.json({ msg: "Booked" });
});

router.get("/doctor/:id", async (req, res) => {
  const data = await Appointment.find({ doctorId: req.params.id }).populate("patientId");
  res.json(data);
});

router.get("/patient/:id", async (req, res) => {
  const data = await Appointment.find({ patientId: req.params.id }).populate("doctorId");
  res.json(data);
});

router.post("/update", async (req, res) => {
  await Appointment.findByIdAndUpdate(req.body.id, { status: req.body.status });
  res.json({ msg: "Updated" });
});

module.exports = router;
