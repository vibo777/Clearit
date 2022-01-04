const express = require('express');

//Create Router object  
// Router object helps you to create End-points  
const userRouter = express.Router();

router.post("/register",(req,res)=>{
    res.send("Registered successfully");
})

router.post("/login",(req,res)=>{
    res.send("Login Successfully");
})

module.exports=router;