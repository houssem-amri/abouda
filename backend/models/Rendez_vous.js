//import mongoose
const mongoose = require('mongoose');

//create doctor Schema
const rendezSchema = mongoose.Schema({
    clientId:String,
    clientName:String,
    doctorId:String,
    doctorName : String,
    doctoreAdress : String,
    date : String,
});
//create doctor Model
const rendez_vous = mongoose.model('rendez_vous',rendezSchema);
//exports doctor
module.exports = rendez_vous;