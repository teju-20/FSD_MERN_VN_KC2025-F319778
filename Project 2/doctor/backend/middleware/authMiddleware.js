const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json("No token");

  try {
    const data = jwt.verify(token, "secret");
    req.user = data;
    next();
  } catch {
    res.status(401).json("Invalid token");
  }
};
