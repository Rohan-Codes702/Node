import express from 'express';
import path from "path";


const app = express();

const staticPath=path.join(import.meta.dirname,"public");

app.use("/public", express.static(staticPath));

app.get("/profile/:username", (req, res) => {
    console.log(req.params);
});

const port = 3000;
app.listen(port, () => {
    console.log("Server Running on port 3000");
});
