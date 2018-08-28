import express from 'express';
const router = express.Router();
import path from 'path';
import moment from 'moment';
import useragent from 'express-useragent';
import requestIp from 'request-ip';
import jwt from 'jsonwebtoken';
import userActivity from'../model/userActivity';   


router.get('/',function(req,res){

   let source = req.headers['user-agent'],
   ua = useragent.parse(source);

   let clientIp = requestIp.getClientIp(req);
   let date = moment().format("MMM Do YY");



   jwt.verify(req.query.id,'imsecrete',function(err,decode){
       if(err){
           throw err;
       } else  {
           let activity = {
               UserName : decode.username,
               IP:clientIp,
               Date: date,
               UA:ua.source
           }


           let data = new userActivity(activity);
           data.save();
       }
   })
   //res.sendFile(path.join('H:\\NodeFinal'+'\\public'+'\\profile.html'))
   res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/profile.html'))
})

module.exports=router;