const mongoose=require('mongoose');
module.exports=mongoose.model('Task', new mongoose.Schema({
title:String,description:String,status:{type:String,default:'Pending'},
user:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
},{timestamps:true}));
