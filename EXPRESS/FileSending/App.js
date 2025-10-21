import express from 'express';
import path from 'path';
const app = express();

app.get("/", (req, res) => {
//   console.log(import.meta.url);
//   res.send("Hello World");

const homwpage=path.join(import.meta.dirname,"public","index.html");

res.sendFile(homwpage);

});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
