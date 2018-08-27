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
var searchRouter = require ('./router/search');
var userdataRouter= require('./api/userdata');
var searchUserRouter = require ('./api/searchUser');

app.use('/',signupRouter);
app.use('/signin',signinRouter);
app.use('/profile',profileRouter);
app.use('/update',updateRouter);
app.use('/userdata',userdataRouter);
app.use('/search',searchRouter);
app.use('/searchuser',searchUserRouter);

app.listen(3000);
console.log('server running on port 3000');
console.log(path.join(__dirname));