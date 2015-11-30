'use sctrict'

const Mongoose = require('mongoose');


const petSchema = new Mongoose.Schema({
  name: {type: String, required: true},
  kind: {type: String, required: true},
  age: {type: Number},
  description: {type: String, required: true},
  owned: {type: Boolean, default: false}
});

module.exports = Mongoose.model('Pet', petSchema)
