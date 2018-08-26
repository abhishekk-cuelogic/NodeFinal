var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodefinal',{ useNewUrlParser: true });
var Schema = mongoose.Schema;

var userActivitySchema = new Schema({
    UserName:String,
    IP:String,
    Date:String,
    UA:String
})

var userActivity = mongoose.model('userActivity',userActivitySchema);

module.exports = userActivity;