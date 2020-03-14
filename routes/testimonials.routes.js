const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuidv4 = require('uuid/v4');

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});
  
router.route('testimonial/:id').get((req, res) => {
  res.json(db.testimonials[req.params.id])
});
  
router.route('/testimonials/random').get((req, res) => {
  id = uuidv4();
  res.json(db.testimonials[id]);
});
  
router.route('/testimonials').post((req, res) => {
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    let random = getRandom(3,9);
    db.testimonials[random] = {
      id: random,
      author: "John Wick",
      text: "He, I'm Wick",
    }
    res.json(db.testimonials);
});
  
router.route('/testimonials/:id').put((req, res) => {
    db.testimonials[req.params.id] = {
      id: req.params.id,
      author: "John Wick 2",
      text: "He, I'm John Wick",
    }
    res.json(db.testimonials);
});
  
router.route('/testimonials/:id').delete((req, res) => {
    delete db.testimonials[req.params.id]
    res.json(db.testimonials)
});

module.exports = router;