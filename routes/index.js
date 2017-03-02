const express = require('express')
const router = express.Router()
const Entity = require('../models/entity')

// CREATE
router.post('/create', function(req, res, next) {
  console.log(req.body);
  const entity = {
    text: req.body.data.text,
    geometry: req.body.data.geometry,
    color: req.body.data.color,
    x: req.body.data.x,
    y: req.body.data.y,
    z: req.body.data.z
  };

  let data = new Entity(entity);
  data.save();

  // res.redirect('/');
  res.json({message: 'entity created sucessfully'});
});

// READ
router.get('/', (req, res, next) => {
  Entity.find( {}, function( err, entities ) {
    if ( err ) {
        console.log(err);
    } else {
        console.log(entities);
        res.render('index', {entities: entities})
    }
  })
})

// UPDATE
router.put('/:id', (req, res, next) => {
  console.log(req.params)
  const id = req.params.id;
  res.json('hello');
  console.log('id', id);
  // Entity.findOneAndUpdate( {"id": id}, function( err, entity ) {
  //   if ( err ) {
  //       console.log(err);
  //   } else {
  //       console.log(entity);
  //
  //       res.render('index', {entity: entity})
  //   }
  // })
})

module.exports = router
