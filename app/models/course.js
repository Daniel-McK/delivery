var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model('Course', {
    name: {type : String, default: ''},
    semester: {type: ObjectId, ref: 'Semester'}
}); 