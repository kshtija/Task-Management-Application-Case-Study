const jwt=require('jsonwebtoken'); const User=require('../models/User');
const sign=u=>jwt.sign({id:u._id,username:u.username,role:u.role},process.env.JWT_SECRET,{expiresIn:'7d'});
exports.signup=async(req,res)=>{try{const{username,password}=req.body;
if(await User.findOne({username})) return res.status(400).json({message:'Exists'});
const u=await User.create({username,password}); const t=sign(u);
res.json({token:t,user:{id:u._id,username,role:u.role}});}catch(e){res.status(500).json({message:e.message});}};
exports.login=async(req,res)=>{try{const{username,password}=req.body;
const u=await User.findOne({username}); if(!u||!await u.comparePassword(password))
return res.status(400).json({message:'Invalid'});
const t=sign(u); res.json({token:t,user:{id:u._id,username,role:u.role}});}catch(e){res.status(500).json({message:e.message});}};
