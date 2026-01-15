const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const key = "RohanMane"; 
let users = [];

// ================= SIGNUP =================
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    name,
    email,
    password: hashPassword,
  });

  res.json({ message: "Signup Successfully" });
});

// ================= LOGIN =================
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Wrong password" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    key,
    { expiresIn: "1m" }
  );

  res.json({ token });
});

// ================= AUTH MIDDLEWARE =================
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  // Expect: Bearer TOKEN
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, key);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// ================= HOME =================
app.get("/home", auth, (req, res) => {
  res.json({
    message: "Welcome Home",
    user: req.user,
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
