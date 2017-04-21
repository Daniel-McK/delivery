var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    firstName: {type : String, default: ''},
    lastName: {type : String, default: ''},
    email: {type: String, default: ''},
    password: {type: String, default: ''},
    admin: {type: Boolean, default: false}
});