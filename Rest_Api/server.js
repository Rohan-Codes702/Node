const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Rohan", age: 21 },
  { id: 2, name: "Shubham", age: 22 }
];

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET student by ID
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// POST new student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student
app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).json({ message: "Student not found" });

  student.name = req.body.name;
  student.age = req.body.age;

  res.json({ message: "Student updated", student });
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Student deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("REST API running on port 3000");
});
