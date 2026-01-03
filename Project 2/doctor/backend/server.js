const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const doctorRoutes = require("./routes/doctor");
const appointmentRoutes = require("./routes/appointments");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://myAtlasDBUser:Teju%402005@myatlasclusteredu.mrvq3yb.mongodb.net/doctorApp")
  .then(() => console.log("MongoDB Connected"));

app.use("/api/auth", authRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/appointment", appointmentRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
