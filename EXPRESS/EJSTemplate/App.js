import express from 'express';
const app=express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render('home',{name:"Shubham",year:2023,dept:"CSE"});
})


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});