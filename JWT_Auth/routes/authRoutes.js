const express=require('express');
const router=express.Router();
const {signup, login} = require('../controller/authcontroller');
const {verifyToken}=require('../middleware/authMiddleware');
const User = require('../models/user');

router.post("/signup", signup);
router.post("/login", login);

router.get("/profile",verifyToken,(req,res)=>{
    res.json({message:"This is a protected route",user:req.user});
});

router.post("/logout", async (req, res) => {
  const { refreshToken } = req.body;

  const user = await User.findOne({ refreshToken });
  if (user) {
    user.refreshToken = null;
    await user.save();
  }

  res.json({ message: "Logged Out" });
});

module.exports = router;