import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome..");
});

router.get("/about", (req, res) => {
  res.status(200).send("This is about Page");
});

router.get("/contact", (req, res) => {
  res.status(200).send("This is contact page");
});

export default router;
