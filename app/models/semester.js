var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model('Semester', {
    name: {type : String, default: ''},
    isCurrent: {type: Boolean, default: false},
    user: {type: ObjectId, ref: 'User'}
});