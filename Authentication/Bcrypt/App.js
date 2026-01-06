const express=require('express');   
const app=express();
const bcrypt=require('bcrypt');

app.get('/',(req,res)=>{
   bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("RohanMane", salt, function(err, hash) {
        res.send(hash);
        console.log(hash);
    });
});
})

//bcrypt.compare("RohanMane", "$2b$10$MbglTqoaafv2GpWx1e4.mO.UXSDr2bHInfhdiQ.Zsfk81cxnkh9RK", function(err, result) {
  //  console.log(result);

app.get('/read',(req,res)=>{
    res.send("read data");
})

app.listen(3000,()=>{
    console.log("server started at port 3000");
})