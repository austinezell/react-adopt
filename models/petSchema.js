'use sctrict'

let Mongoose = require('mongoose');


let petSchema = new Mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number},
  descriptions: [{type: String}]
})

module.exports = Mongoose.model('Pet', petSchema)
