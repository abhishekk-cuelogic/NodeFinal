var jwt = require('jsonwebtoken');


function authentication(req,res,next){
    jwt.verify(req.query.id, 'iamsecreate',function(err,decode){
        if(err){
            res.send("unauth");
        } else {
            console.log("Autheticate");
            next();
        }
    })
}

module.exports = authentication;
