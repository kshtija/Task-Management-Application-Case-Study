const mongoose=require('mongoose'); const bcrypt=require('bcryptjs');
const schema=new mongoose.Schema({username:String,password:String,role:{type:String,default:'user'}});
schema.pre('save',async function(n){ if(!this.isModified('password'))return n();
this.password=await bcrypt.hash(this.password,10); n(); });
schema.methods.comparePassword=function(c){ return bcrypt.compare(c,this.password); };
module.exports=mongoose.model('User',schema);
