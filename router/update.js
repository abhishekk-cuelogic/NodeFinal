var express = require ('express');
var router = express.Router();
var path = require('path');
var authentication = require('../middleware/auth');

router.get('/',function(req,res){
    console.log("done");
    res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/update.html'))
})

module.exports=router;