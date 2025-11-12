import express from "express";
import homeRouter from "./routers/homerouter.js";

const app = express();

app.use(express.json());
app.use("/", homeRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
