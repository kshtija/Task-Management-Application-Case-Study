const jwt=require('jsonwebtoken'); const User=require('../models/User');
exports.protect=async(req,res,n)=>{const a=req.headers.authorization||''; const t=a.startsWith('Bearer ')?a.split(' ')[1]:null;
if(!t)return res.status(401).json({message:'Missing'}); try{const d=jwt.verify(t,process.env.JWT_SECRET);
req.user=await User.findById(d.id); n();}catch(e){res.status(401).json({message:'Invalid'});} };
exports.adminOnly=(req,res,n)=>req.user.role!=='admin'?res.status(403).json({message:'Admin only'}):n();
