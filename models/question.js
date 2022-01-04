const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

    title:{type:String,require:true},
    description:{type:String, require:true},
    category:{type:String,require:true},
    doc:{type:String},
    reward:{type:String,required:true,default:10},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    upvotes:{type:Number,default:0},
    downvotes:{type:Number,default:0}
},{timestamps:true})

const questionModel = new mongoose.model('questions',questionSchema);
module.exports = questionModel;
