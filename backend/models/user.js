//import mongoose
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

//create user Schema
const userSchema = mongoose.Schema({
    fullName:String,
    emailAdress:{type:String , unique: true},
    tel:Number,
    password:String,
    role:String,
});
userSchema.plugin(uniqueValidator);
//create user Model
const user = mongoose.model('User',userSchema);
//exports user
module.exports = user;