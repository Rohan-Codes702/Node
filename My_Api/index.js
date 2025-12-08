const express =require('express');

const app=express();

app.use(express.json());

app.get("/Hello",(req,res)=>{
    res.send("Hello Welcome to my api");
})

app.post("/send",(req,res)=>{
    const data=req.body;

    res.send({
        message:"Data received",
        yourData:data
    });
});

app.listen(3000,()=>{
    console.log("server running at 3000 port");
})