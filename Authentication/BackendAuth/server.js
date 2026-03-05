const express =require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const cors=require("cors");

const user=require("./user");
const app=express();

app.use(express.json());
app.use(cors());

const secretKey="Rohan@12345";

app.post('/signup',async (req,res)=>{
    const {username,password}=req.body;

    const hashedPassword=await bcrypt.hash(password,10);

    const Newuser={
        username,
        password:hashedPassword
    }
    user.push(Newuser);

    res.json({
        message:"User Registed Successfully"
    });
});


app.post("/login",async(req,res)=>{
    const{username,password}=req.body;
    const founduser=user.find(u=>u.username===username);

    if(!founduser){
        return res.status(400).json({message:"User not valid"});

    }
    const ismathch=await bcrypt.compare(password,founduser.password);

    if(!ismathch){
        return res.status(400).json({message:"Invalid user"});

    }
    const token =jwt.sign(
        {username:founduser.username},
        secretKey,
        {expiresIn:"1h"}
    );
    res.json({
        message: "Login successful",
        token: token
    });

});

app.listen(5000,()=>{
    console.log("Server Runnign on 5000port ");
})