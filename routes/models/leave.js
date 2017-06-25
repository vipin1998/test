/* Leave Schema  */

var mongoose = require('mongoose');
var leaveSchema = mongoose.Schema({
    startDate : {
        type : String
    },
    endDate : {
        type : String
    },
    requestedBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    requestedAt : {
        type :  Date
    },
    approvedAt : {
        type : Date
    },
    approvalStatus : {
        type : String,
        enum : ['pending' , 'approved'],
        default : 'pending'
    },
    leaveType : {
        type :String,
        enum : ['marriage' , "health"]
    }
})

module.exports = mongoose.model('Leave',leaveSchema);