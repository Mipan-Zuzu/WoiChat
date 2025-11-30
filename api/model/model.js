const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    Email : String,
    Password : String
})

const User = mongoose.model('User', UserModel)

module.exports = User