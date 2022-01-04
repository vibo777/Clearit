const express = require('express');
const verifyToken = require('./verifytoken');
const questionModel = require('../models/question');
const answerModel = require('../models/answer');

const router = express.Router();

// to create answer for question 
router.post("/",verifyToken,async(req,res)=>{

    let question = req.body;

    let questionOBJ = new questionModel(question);

    questionOBJ.save()
    .then(()=>{
        res.send({message:"Answer is Saved"});
    })    
    .catch((err)=>{
        res.send({message:"Some problem in answering"});
    })

})


// to fetch all question 
router.get("/",verifyToken,async(req,res)=>{

    let questions = await questionModel.find();   
    res.send(questions);

})  

// to fetch details of question & all it's answers 
router.get("/:id",verifyToken,async(req,res)=>{

    let id=req.params.id;
    let question = await questionModel.findOne({_id:id});
    let answers = await questionModel.find({question:id});    
    
    res.send({question:question,answers:answers});

})



module.exports = router;