var express = require('express');
var router =express.Router();
var userData = require ('../model/user');

router.post('/',function(req,res){
    var username=req.body.username;
     
    if(username === "all") {
        userData.find({},function(err,user){
            if(err) {
                throw err;
            } else {
                res.json(user);
            }
        })
    } else {
        userData.findOne({UserName:username},function(err,user){
            if(err) {
                throw err;
            } else {
                res.json(user);
            }
        })
    
    } 
})

module.exports = router;