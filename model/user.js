var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodefinal',{ useNewUrlParser: true });
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    UserName:String,
    Password:String,
    FName:String,
    LName:String
})

var userData = mongoose.model('userData',userDataSchema);

module.exports = userData;