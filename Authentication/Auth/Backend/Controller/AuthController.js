const bcrypt=require('bcrypt');
const UserModel=require('../Models/userModel.js');
const jwt=require('jsonwebtoken');

const signup=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(user){
            return res.status(400).send({message:"User already exists"});
        }
        const userModel=new UserModel({name,email,password});
        userModel.password=await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201).json({message:"User created successfully"});

    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await UserModel.findOne({email});
        const errorMessage="Invalid email or password";
        if(!user){
            return res.status(403).send({message:errorMessage});
        }
       const isPasswordValid=await bcrypt.compare(password,user.password);
       if(!isPasswordValid){
        return res.status(403).send({message:errorMessage});
       }
        const jwttoken=jwt.sign(
            {email:user.email,_id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        )


        res.status(200).json({message:"Login successfully",
            sucess:true,
            token:jwttoken,
            email,
            name:user.name
        });

    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}
module.exports={signup,login};