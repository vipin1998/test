var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String,
        unique : true
    },
    role : {
        type : String,
        enum : ['Manager' , 'Employee']
    },
    password : {
        type : String
    }
})


module.exports = mongoose.model('User',userSchema);