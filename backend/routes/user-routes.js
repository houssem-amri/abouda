const express = require("express");

const router = express.Router();
const bcrypt = require('bcrypt');
//import User Model
const User = require("../models/user");
//Busniss Logic:User signup


router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      fullName: req.body.fullName,
      emailAdress: req.body.emailAdress,
      tel: req.body.tel,
      password:hash,
      role: req.body.role,
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});





router.post('/login', (req, res) => {
	User.findOne({ emailAdress: req.body.email })
		.then((findedUser) => {
			console.log('findedUser', findedUser);
			if (!findedUser) {
				res.status(200).json({
					message: '0'
				});
			}
			return bcrypt.compare(req.body.password, findedUser.password);
		})
		.then((correctUserPwd) => {
			if (!correctUserPwd) {
				res.status(200).json({
					message: '1'
				});
			}
			User.findOne({ emailAdress: req.body.email }).then((finalUser) => {
				let user = {
					id: finalUser._id,
					fullName: finalUser.fullName,
					role: finalUser.role
				};
				res.status(200).json({
					user: user,
					message: '2'
				});
			});
		});
});
module.exports = router;