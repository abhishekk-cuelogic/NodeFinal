var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var signupRouter = require ('./router/signup');
var signinRouter = require ('./router/signin');
var profileRouter= require ('./router/profile'); 
var updateRouter = require ('./router/update');

app.use('/',signupRouter);
app.use('/signin',signinRouter);
app.use('/profile',profileRouter);
app.use('/update',updateRouter);

app.listen(3000);
console.log('server running on port 3000');