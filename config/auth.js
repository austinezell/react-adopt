'use strict';

let jwtAuth = {}
let atob = require('atob');
let jwt = require('express-jwt-cookie')

jwtAuth.getUserId = (jwt) =>{
  let stringPayload = atob(jwt.split('.')[1]);
  let objectPayload =JSON.parse(stringPayload)
  let userId = objectPayload._id;
  return userId;
}

jwtAuth.middleware = jwt({secret: process.env.SECRET || 'secret'})

module.exports = jwtAuth;
