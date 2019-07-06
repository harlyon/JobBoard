const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../models/user");

users.use(cors())

process.env.SECRET_KEY = 'unannouncesecretkey'

users.post('/register', (req,res) => {
    const today = newDate();
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email:req.body.email,
      password: req.body.password,
      created: today
    }
    user.findOne ({
      email: req.body.email
    })
    .then(user => {
      if(!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          user.create(userData)
          .then(user => {
            res.json({status : user.email + "was registered sucessfully"})
          })
          .catch(err => {
            res.send('error: '+ err)
          })
        })
      } else {
        res.json({error: 'User already exist'})
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  user.findOne({
    email: req.body.email
  })
  .then(user => {
    if(user) {
      if(bcyrpt.compareSync(req.body.password, user.password)) {
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      } else {
        res.json({error: 'User does not Exist'})
      }
    }
  })
  .catch(err => {
    res.send("error" + err)
  })
})

users.get('/profile', (req, res) => {
  const decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  User.findOne({
    _id: decoded._id
  })
  .then(user => {
    if(user) {
      res.json(user)
    } else {
      res.send("User does not exist")
    }
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

module.exports = users