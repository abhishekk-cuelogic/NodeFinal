const Joi= require('joi');

const schema = Joi.object().keys({
  username:Joi.string().required(),
  password:Joi.string().required(),
  fname:Joi.string().required(),
  lname:Joi.string().required() 
});

function validation(req,res,next) {
    Joi.validate(req.body,schema,function(err,value){
      if(err){
        console.log("not validate");
      }else{
        next();
      }
    })
}

module.exports = validation;
