'use strict';

var express = require('express');
var router = express.Router();
var jwtAuth = require('../config/auth.js')

router.get('/', function(req, res, next) {
  res.render('index', {title: 'TITLE'});
});

router.get('/ping', jwtAuth.middleware, (req, res) =>{
  res.send('pong')
})

module.exports = router;
