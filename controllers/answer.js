const express = require('express');
const verifyToken = require('./verifytoken');
const answerModel = require('../models/answer');

const router = express.Router();

router.post("/",verifyToken,async(req,res)=>{

    let answer = req.body;

    let answerOBJ = new answerModel(answer);

    answerOBJ.save()
    .then(()=>{
        res.send({message:"answer saved"});
    })
    .catch((err)=>{
        res.send({message:"Some Problem Answering"});
    })

})

router.put("/:id",verifyToken,async(req,res)=>{

    let dataToUpdate = req.body;
    let id = req.params.id;

    answerModel.updateOne({_id:id},dataToUpdate)
    .then(()=>{
        res.send({message:"Answer is updated"});
    })    
    .catch((err)=>{
        res.send({message:"Error in updating answer"});
    })
})

module.exports = router;

