const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

// GET Books
app.get("/books", (req, res) => {
  fs.readFile("./books.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    const books = JSON.parse(data);  
    res.json(books);
  });
});

// POST Book
app.post("/books", (req, res) => {
  fs.readFile("./books.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    const books = JSON.parse(data);  
    books.push(req.body);

    fs.writeFile("./books.json", JSON.stringify(books, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }
      res.json({ message: "Book added successfully" });
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
