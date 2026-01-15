const jwt=require('jsonwebtoken');

const ensureAuthenticated=(req,res,next)=>{
    const auth=req.headers["authorization"];

    if(!auth){
        return res.status(401).json({message:"Authorization header missing"});
    }

    try {
        const decode=jwt.verify(auth,process.env.JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        return res.status(401).json({message:"Invalid or expired token"});
    }
}

module.exports={ensureAuthenticated};