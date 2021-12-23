const mongoose = require('mongoose');

const answerSchema = new mongoose.schema({
    answer:{type:String,require:true},
    question:{type:mongoose.Schema.Types.ObjectId,ref:"questions"},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    accepted:{type:Boolean,default:false},
    upvotes:{type:Number,default:0},
    downvotes:{type:Number,default:0}
},{timestamps:true})

const answerModel = new mongoose.model("answer",answerSchema);

module.exports = answerModel;
