const express=require('express');

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hellow Welcome to express server");
})

app.post('/user',(req,res)=>{
    res.json({
        message:"user recieved",
        data:req.body
    })
})


app.listen(3000,()=>{
    console.log("Server is running at 3000")
});