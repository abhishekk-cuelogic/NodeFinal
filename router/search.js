var express = require('express');
var path = require('path');
var router = express.Router();


router.get('/',function(req,res){
    res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/search.html'))
})

module.exports = router;