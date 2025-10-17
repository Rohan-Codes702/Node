import express from "express"

const app=express();

app.get("/",(req,res)=>res.send("Hello Rohan"));
app.get("/about",(req,res)=>res.send("<h1>THis is About page"));

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is Running on at port:${PORT}`);
});