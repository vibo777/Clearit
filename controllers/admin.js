const express = require('express');
 
// Router object 
const adminRouter = express.Router();

router.post("/login",(req,res)=>{
    res.send("login successfully");
})

router("/register",(req,res)=>{
    res.send("Registration successful");
})

module.exports = router;


