const jwt =require("jsonwebtoken");

exports.verifyToken=(req,res,next)=>{
    const header=req.headers["authorization"];

    if(!header){
        return res.status(401).json({message:"Unauthorized"});
    }
    const token=header.split(" ")[1];

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({message:"Forbidden"});
        }
        req.user=user;
        next();
    });
}