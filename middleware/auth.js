import jwt from 'jsonwebtoken';


function authentication(req,res,next){
    jwt.verify(req.query.id, 'imsecrete',function(err,decode){
        if(err){
            res.send("unauth");
        } else {
            console.log("Autheticate");
            next();
        }
    })
}

module.exports = authentication;
