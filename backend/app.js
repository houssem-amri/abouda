//import express module
const express = require ('express');
//import body-parser module
const bodyParser = require ('body-parser');
const path = require('path');
const mongoose = require('mongoose');

//create express application
const app = express();
//configuration bodyParser
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost:27017/HealthDB');
app.use('/images', express.static(path.join('backend/images')))

const doctorRouter = require('./routes/doctor-routes');
const userRouter = require('./routes/user-routes');
const Rendez_vousRouter = require('./routes/Rendez_vous-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});




//exportation de les paths
app.use('/doctors',doctorRouter);
app.use('/users',userRouter);
app.use('/rendezVous',Rendez_vousRouter);



module.exports = app;
