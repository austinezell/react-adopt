'use strict';

var router = require('express').Router();
var passport = require('passport')
let jwtAuth = require('../config/auth')
var User = require('../models/userSchema.js')

router.post('/register', (req, res, next)=>{
  console.log(req.body);
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  var user = new User();

  user.username = req.body.username;
  user.email = req.body.username;
  user.setPassword(req.body.password);

  user.save(function (err){
    if(err) return res.send(err);
    return res.send(user.generateJWT())
  });
});

router.post('/login', (req, res)=>{
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  passport.authenticate('local', function(err, user, next){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.get('/me', (req, res) =>{
  const userId = jwtAuth.getUserId(req.headers.authorization);

  User.findById(userId, (err, user)=>{
    err ? res.status(499).send(err) : res.send(user);
  })
})

module.exports = router;
