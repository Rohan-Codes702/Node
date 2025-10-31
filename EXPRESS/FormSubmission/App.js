import express from 'express';
import path from "path";

const app=express();

const staticPath=path.join(import.meta.dirname,"public");

app.use(express.static(staticPath));

app.use(express.urlencoded());

// app.get("/contact",(req,res)=>{
//     console.log(req.query);
//     res.redirect("/");
// });

app.post("/contact",(req,res)=>{
    console.log(req.body);
    res.redirect("/");
})

const port=3000;
app.listen(port,()=>{
    console.log("server running on port 3000");
})