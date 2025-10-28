import express from 'express';
import path from "path";


const app = express();

const staticPath = path.join(import.meta.dirname, "public");

app.use("/public", express.static(staticPath));

app.get("/product", (req, res) => {
    console.log(req.query);
    res.send(`<h1>Product Page </h1>`);
    res.send(`<h1>User serch for products ${req.query.search} mobile </h1>`)

})

app.get("/profile/:username", (req, res) => {
    console.log(req.params);
});

const port = 3000;
app.listen(port, () => {
    console.log("Server Running on port 3000");
});
