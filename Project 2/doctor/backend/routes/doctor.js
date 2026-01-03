const router = require("express").Router();
const Doctor = require("../models/Doctor");

router.get("/all", async (req, res) => {
  const doctors = await Doctor.find().populate("userId");
  res.json(doctors);
});

module.exports = router;
