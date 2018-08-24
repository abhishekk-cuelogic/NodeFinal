var express = require ('express');
var router = express.Router();
var path = require('path');

router.get('/',function(req,res){
    res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/profile.html'))
})

module.exports=router;