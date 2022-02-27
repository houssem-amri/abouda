const express = require("express");

const router = express.Router();

//import doctor Model
const Rendez_vous = require("../models/Rendez_vous");

router.post("/", (req, res) => {
  const data = new Rendez_vous({
    clientId: req.body.clientId,
    clientName: req.body.clientName,
    doctorId: req.body.doctorId,
    doctorName: req.body.doctorName,
    doctoreAdress: req.body.doctoreAdress,
    date: req.body.date,
  });
  data.save((err, result) => {
    if (err) {
      console.log("Here err with DB", err);
    } else {
      res.json({
        message: "rendez vous added with success",
      });
    }
  });
});

module.exports = router;
