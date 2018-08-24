var jwt = require('jsonwebtoken');


function authentication(req,res,next){
    jwt.verify(req.body.token, 'iamsecreate',function(err,decode){
        if(err){
            res.send("unauth");
        } else {
            next();
        }
    })
}

module.exports = authentication;
