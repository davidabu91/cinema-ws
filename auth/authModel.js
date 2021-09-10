const mongoose = require('mongoose');

let schema = mongoose.Schema;

let authUserSchema = new schema({
    UserName: String,
    Password: String
})

module.exports = mongoose.model('users', authUserSchema)