var express = require ('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var useragent = require ('express-useragent');
var requestIp = require('request-ip');
var jwt = require ('jsonwebtoken');
var userActivity = require ('../model/userActivity');   


router.get('/',function(req,res){
   // res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/profile.html'))

   var source = req.headers['user-agent'],
   ua = useragent.parse(source);

   var clientIp = requestIp.getClientIp(req);
   var date = moment().format("MMM Do YY")



   jwt.verify(req.query.id,'iamsecreate',function(err,decode){
       if(err){
           throw err;
       } else  {
           var activity = {
               UserName : decode.username,
               IP:clientIp,
               Date: date,
               UA:ua.source
           }


           var data = new userActivity(activity);
           data.save();
       }
   })
   res.sendFile(path.join('H:\\NodeFinal'+'\\public'+'\\profile.html'))
})

module.exports=router;