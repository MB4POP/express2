const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/concerts').get((req, res) => {
  res.json(db.concerts);
});
  
router.route('concert/:id').get((req, res) => {
  res.json(db.concerts[req.params.id])
});
  
router.route('/concerts/random').get((req, res) => {
  id = uuidv4();
  res.json(db.concerts[id]);
});
  
router.route('/concerts').post((req, res) => {
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    let random = getRandom(3,9);
    db.concerts[random] = {
      id: random,
      author: "John Wick",
      text: "He, I'm Wick",
    }
    res.json(db.concerts);
});
  
router.route('/concerts/:id').put((req, res) => {
    db.concerts[req.params.id] = {
      id: req.params.id,
      author: "John Wick 2",
      text: "He, I'm John Wick",
    }
    res.json(db.concerts);
});
  
router.route('/concerts/:id').delete((req, res) => {
    delete db.concerts[req.params.id]
    res.json(db.concerts)
});

module.exports = router;