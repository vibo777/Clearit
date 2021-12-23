const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    // mobile:{type:String,require:true,unique:true},
    // username:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    
},{timestamps:true})


const adminModel = new mongoose.model('admins',adminSchema);

module.exports = adminModel;