var express = require ('express');
var router = express.Router();
var path = require('path');
var bcrypt = require('bcrypt');
var userData = require('../model/user');
var jwt = require('jsonwebtoken');
var secretekey = 'iamsecreate';


router.get('/',function(req,res){
    res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/signin.html'));
})

router.post('/',function(req,res){
    console.log(req.body);

    var uname = req.body.username;
    var password = req.body.password

    userData.find({},function(err,users){
        if(err){
            throw err;
        } else{
            users.forEach(user => {
                if(user.UserName === uname){
                    if(bcrypt.compareSync(password, user.Password)) {
                        
                        var token = jwt.sign({

                                password:password
                            },
                            secretekey,
                            {
                                expiresIn: '2h'
                            });
                            console.log("login successful");
                            var decode = jwt.verify(token,secretekey);
                            console.log(decode);
                            res.json({token:token});

                       } else {
                        console.log("login unsuccessful");
                       }
                }
            })
        }
    })
})


module.exports = router;