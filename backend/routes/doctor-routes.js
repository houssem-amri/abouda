
const express = require('express');

const router = express.Router();

//import doctor Model
const Doctor = require('../models/doctor');

const multer = require('multer')
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }
 const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
  }
  cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const extension = MIME_TYPE[file.mimetype];
  const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
 extension;
  cb(null, imgName);
  }
 });
//Busniss Logic Get all doctors
router.get("/",(req,res)=>{
    console.log('Here into get all doctors');
    Doctor.find((err, docs) => {
      if (err) {
        console.log('Here error with DB', err);
      } else { 
        res.json({
          allDoctors: docs,
        });
      }
    })
  });
//Busniss Logic Add doctor
router.post("/",multer({ storage: storage }).single('image'),
(req, res) => {
  console.log("Hero into add doctor", req.body);
  url = req.protocol + '://' + req.get('host');
  
  const doctorObj = new Doctor({
    name: req.body.name,
    departement: req.body.departement,
    localization: req.body.localization,
    image: url + '/images/' + req.file.filename
  });
  doctorObj.save((err, result) => {
    if (err) {
      console.log('Here err with DB', err);
    } else {
      res.json({
        message: "Doctor added with success",
      });
    }
  });
});


//Busniss Logic Get doctor by ID
// router.get("/:id",(req,res)=>{

// });
// //Busniss Logic Get doctor by ID
// router.delete("/:id",(req,res)=>{

// });
// //Busniss Logic update doctor by ID
// router.put("/:id",(req,res)=>{

// });
// //Busniss Logic search doctor by ID
// router.get("/:local",(req,res)=>{

// });
//Busniss Logic: Edit chef By ID
router.put("/:id/:doctor", (req, res) => { });
  
//Busniss Logic Edit Chef
router.put("/:id", (req, res) => { 
  console.log("Here doctor obj", req.body);
  console.log("Here doctor id", req.params.id);
  Chef.updateOne({_id:req.params.id}, req.body).then(
    (result)=>{
      res.json({
        message:'Updated with success',
      });
    }
  )
});

module.exports = router;