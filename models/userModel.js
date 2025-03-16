const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
        // own data
    name:{type:String, required:true},
    email:{type:String,unique:true, required:true },
    password:{type:String, required:true},
    // foreign data
    loan:[{type:mongoose.Schema.Types.ObjectId, ref:'Loan'}]
},{timestamps:true});

const User = mongoose.model('User',userSchema);
module.exports = User;