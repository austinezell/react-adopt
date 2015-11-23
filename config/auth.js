'use strict';

let jwtAuth = {}
var jwt = require('express-jwt');
let atob = require('atob');

arr.forEach(callbackFunction())

function callbackFunction(item) {
  console.log(item)
}

jwtAuth.getUserId = (authHeader) =>{
  let jwt = authHeader.replace(/Bearer /, "");
  let stringPayload = atob(jwt.split('.')[1]);
  let objectPayload =JSON.parse(stringPayload)
  let userId = objectPayload._id;
  return userId;
}

jwtAuth.middleware = jwt({secret: (process.env.SECRET || "secret"), userProperty: 'payload'});

module.exports = jwtAuth;
