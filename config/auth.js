'use strict';

let jwtAuth = {}
let jwt = require('express-jwt');
let atob = require('atob');

jwtAuth.getUserId = (authHeader) =>{
  let jwt = authHeader.replace(/Bearer /, "");
  let stringPayload = atob(jwt.split('.')[1]);
  let objectPayload =JSON.parse(stringPayload)
  let userId = objectPayload._id;
  return userId;
}

jwtAuth.middleware = jwt({secret: (process.env.SECRET || "secret"), userProperty: 'payload'});

module.exports = jwtAuth;
