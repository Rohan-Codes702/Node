import express from "express";

const exp = express();

exp.get("/", (req, res) => {
  res.send("Hello Rohan");
});

const port = process.env.port ;

exp.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
