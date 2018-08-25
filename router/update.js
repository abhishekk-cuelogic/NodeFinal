var express = require ('express');
var router = express.Router();
var path = require('path');
var authentication = require('../middleware/auth');
var bodyParser = require('body-parser');
var app = express();
var authetication = require ('../middleware/auth.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.get('/',authetication,function(req,res){
    //console.log("done");
    //res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/update.html'))
    res.sendFile(path.join('H:\\NodeFinal'+'\\public'+'\\update.html'))
    console.log(req.query.id);
})

module.exports=router;