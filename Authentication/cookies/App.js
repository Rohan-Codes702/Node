const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();

app.use(cookieParser());
app.get('/',(req,res)=>{
    res.cookie("name","Rohan");
    res.send("Done");
});

app.get('/read',(req,res)=>{
    console.log(req.cookies);
    res.send("read Page");
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});