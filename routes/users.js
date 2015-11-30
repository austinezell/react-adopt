'use strict';

var router = require('express').Router();
var passport = require('passport');
let jwtAuth = require('../config/auth');
var User = require('../models/userSchema.js');

router.post('/register', (req, res, next)=>{
  if(!req.body.username || !req.body.email || !req.body.password){
    return res.status(401).json({message: 'Please fill out all fields'});
  }

  let user = new User();

  user.username = req.body.username;
  user.email = req.body.username;
  user.setPassword(req.body.password);

  user.save(function (err, user){
    if(err) return res.status(499).send(err);

    res.cookie('jwtuser', user.generateJWT());
    res.end();
  });
});

router.post('/login', (req, res)=>{
  if(!req.body.username || !req.body.password){
    return res.status(401).json({message: 'Please fill out all fields'});
  }
  User.findOne(req.username, (err, user)=>{
    if (err) return res.status(499).send(err);

    if (!user.validPassword(req.body.password) || !user){
      return res.status(401).send('Invalid login credentials');
    }

    res.cookie('jwtuser', user.generateJWT(), { expires: new Date(Date.now() + 900000)});
    res.end();
  })

});

router.get('/me', jwtAuth.middleware, (req, res) =>{
  const userId = jwtAuth.getUserId(req.cookies.jwtuser);
  User.findById(userId, (err, user)=>{
    err ? res.status(499).send(err) : res.send(user);
  })
});

router.get('/one/:username', (req, res) =>{
  User.findOne(req.params.username, (err, user)=>{
    err ? res.status(499).send(err) : res.send(user);
  });
});

module.exports = router;
