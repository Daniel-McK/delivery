var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model('Deliverable', {
    name: {type : String, default: ''},
    course: {type: ObjectId, ref: 'Course'},
    category: {type: ObjectId, ref: 'Category'},
    weight: {type: Number, default: 0},
    mark: {type: Number, default: null},
    isComplete: {type: Boolean, default: false},
    due: {type: Date, default: new Date()}
});