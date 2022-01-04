const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// import user model 
const userModel = require('../models/user')    

//Create Router object  
// Router object helps you to create End-points  
const userRouter = express.Router();


router.post("/register",(req,res)=>{
    
    let user = req.body;

    //  it will convert normal textual password into encrypted one  
    //  (genSalt) this function tell's us how many round you want to do & it will generate random salt i.e mixture  

    bcryptjs.genSalt(10,(err,salt)=>{

        
        if(err===null){
            // pass old password , salt it will give newpassword
            bcryptjs.hash(user.password,salt,(err,newpassword)=>{
           
                // updated it with old password
                user.password = newpassword;

                // save the new encrypted password in database 
                
                let userOBJ = new userModel(user);
                userOBJ.save()
                .then(()=>{
                    res.send({message:"User is Registered"})
                })
                .catch((err)=>{
                    console.log(err);
                    res.send({message:"Problem in creating the user"}) 
                })
       
            })
        }
    })

})


// for login functionality 
// 1. First check if username is correct 
// 2. Whatever username & password pass in body it will store in userCred  

router.post("/login",(req,res)=>{

    // Whatever username & password pass in body it will store in userCred 
    let userCred = req.body;

    // we try to find person with that username 
    userModel.findOne({username:userCred.username})
    .then((user)=>{
        // if we found username, if block will executed 
        if(user!=null){

            // we are checking the previous encrypted password with new encrypted password using bcryptjs.compare() method  
            bcryptjs.compare(userCred.password,user.password,(err,status)=>{
                if(status === true){
        
                   jwt.sign(userCred,"secretkey",(err,token)=>{
                        if(err===null){
                            res.send({message:"welcome user",token:token});
                        }
                   })   
                }
                else{
                    res.send({message:"Password don't match"})
                }    
            })

        }  
        // if we don't found username else block executed 
        else{
            res.send({message:"User is not found"});
        }     
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Some problem"});
    })
})

module.exports=router;