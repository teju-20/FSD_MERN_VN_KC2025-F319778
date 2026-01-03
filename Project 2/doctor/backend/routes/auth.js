const router = require("express").Router();
const User = require("../models/User");
const Doctor = require("../models/Doctor");

router.post("/register", async (req, res) => {
  const { name, email, password, role, specialization, experience } = req.body;

  const user = await User.create({ name, email, password, role });

  if (role === "doctor") {
    await Doctor.create({
      userId: user._id,
      specialization,
      experience,
      availableSlots: ["10:00", "11:00", "14:00"],
    });
  }

  res.json({ message: "Registered" });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.status(401).json({ msg: "Invalid" });
  res.json(user);
});

module.exports = router;
