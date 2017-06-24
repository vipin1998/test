var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
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
    username : {
        type : String,
        unique : true
    }
})


module.exports = mongoose.model('User',userSchema);