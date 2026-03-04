const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const Hashpassword = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: Hashpassword,
  });
  res.json({ message: "User created successfully" });
};
const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {   
    id: user._id,
    },
    process.env.REFRESH_TOKEN_SECRET,   
    {
      expiresIn: "7d",
    }
  );
};

exports.login=async(req,res)=>{
    const{email,password}=req.body;

    const user=await User.findOne({email});

    const isMathch=await bcrypt.compare(password,user.password);
    if(!isMathch){
        return res.status(400).json({message:"Invalid credentials"});
    }
    const accessToken=generateAccessToken(user);
    const refreshToken=generateRefreshToken(user);

    user.refreshToken=refreshToken;
    await user.save();

    res.json({accessToken,refreshToken});

};
