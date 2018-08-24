var express = require ('express');
var router = express.Router();
var path = require('path');
var authentication = require('../middleware/auth');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.get('/',function(req,res){
    console.log("done");
    res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/update.html'))
    console.log(req.query.id);
})

module.exports=router;