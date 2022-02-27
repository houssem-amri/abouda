//import mongoose
const mongoose = require('mongoose');

//create doctor Schema
const doctorSchema = mongoose.Schema({
name:String,
departement:String,
localization:String,
image : String,
});
//create doctor Model
const doctor = mongoose.model('Doctor',doctorSchema);
//exports doctor
module.exports = doctor;