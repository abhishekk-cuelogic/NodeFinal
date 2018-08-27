var express = require('express');
var router =express.Router();
var jwt = require('jsonwebtoken');
var userData = require ('../model/user');

router.post('/',function(req,res){

    jwt.verify(req.body.token, 'iamsecreate',function(err,decode){
        if(err){
            throw err;
        } else {
            userData.findOne({UserName : decode.username},function(err,user){

                var user = {
                    UserName : user.UserName,
                    FName : user.FName,
                    LName : user.LName 
                }
            
                res.json(user);

            })
        }
    })    
})


router.put('/',function(req,res){
    console.log("put hit");
    console.log(req.body);

    userData.findOneAndUpdate({UserName : req.body.username},{FName:req.body.fname , LName:req.body.lname},function(err,doc){
        if(err){
            throw err;
        } else {
            console.log("updated successfully");
        }
    })
})

module.exports = router;