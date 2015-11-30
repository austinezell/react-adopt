'use strict';

let router = require('express').Router();
const Pet  = require('../models/petSchema');

router.post('/create', (req, res) =>{
  Pet.create(req.body, (err, pet)=>{
    err ? res.status(499).send(err) : res.send(pet);
  });
});

router.get('/getAll', (req, res)=>{
  Pet.find({}, (err, pets)=>{
    err ? res.status(499).send(err) : res.send(pets);
  });
});

router.get('/getOne/:id', (req, res)=> {
  Pet.findById(req.params.id, (err, pet) => {
    err ? res.status(499).send(err) : res.send(pet);
  })
})

module.exports = router
