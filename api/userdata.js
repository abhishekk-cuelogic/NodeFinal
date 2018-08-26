var express = require('express');
var router =express.Router();
var jwt = require('jsonwebtoken');
var userData = require ('../model/user');

router.post('/',function(req,res){


    jwt.verify(req.body.token, 'iamsecreate',function(err,decode){
        if(err){
            throw err;
        } else {
            console.log(decode.username);
            userData.findOne({UserName : decode.username},function(err,user){
                console.log(user.FName);

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

module.exports = router;