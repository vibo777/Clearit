const express = require('express');
const router = express.Router();

router.post("/answer",(req,res)=>{
    console.log("Hello");
})

module.exports = router;

