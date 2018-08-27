var express = require ('express');
var bcrypt = require ('bcrypt');
var path = require('path');
var router = express.Router();
var userData = require('../model/user');
var validation = require('../middleware/validation');

router.get('/',function(req,res){
   // res.sendFile(path.join('H:\\NodeFinal'+'\\public'+'\\signup.html'));
   res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/signup.html'))
})

router.post('/',validation,function(req,res){

        var password = req.body.password;

        let hash = bcrypt.hashSync(password, 10);

        var user = {
            UserName:req.body.username,
             Password:hash,
            FName:req.body.fname,
            LName:req.body.lname
        }

        var data = new userData(user);
        data.save();  
    })

module.exports = router;