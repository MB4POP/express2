const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/seats').get((req, res) => {
  res.json(db.seats);
});
  
router.route('seat/:id').get((req, res) => {
  res.json(db.seats[req.params.id])
});
  
router.route('/seats').post((req, res) => {
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    let random = getRandom(3,9);
    db.seats[random] = {
      id: random,
      author: "seats",
      text: "He, I'm seats",
    }
    res.json(db.seats);
});
  
router.route('/seats/:id').put((req, res) => {
    db.seats[req.params.id] = {
      id: req.params.id,
      author: "seats 2",
      text: "He, I'm John seats",
    }
    res.json(db.seats);
});
  
router.route('/seats/:id').delete((req, res) => {
    delete db.seats[req.params.id]
    res.json(db.seats)
});

module.exports = router;