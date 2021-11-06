const express = require('express');
const router = express.Router();
const db = require('../db');

//get all concerts
router.route('/concerts').get((req, res) => {
  res.json(db.concerts);
});

router.route('/concerts/random').get((req, res) => {
  const randID = Math.floor(Math.random() * db.concerts.length);
  res.json(db.concerts[randID]);
});

//! dynamic routing needs to be defined ::AFTER:: static routes
router.route('/concerts/:id').get((req, res) => {
  res.json(db.concerts[req.params.id - 1]);
});

router.route('/concerts').post((req, res) => {
  const { performer, genre, price, day, image } = req.body;
  const nextId = db.concerts.length + 1;

  if (!performer || !genre || !price || !day || !image) {
    res.status(400).json({ message: 'Validation error! You need to supply performer, genre, price, day and image to add a concert' });
    return;
  } else {
    db.concerts.push(
      {
        id: nextId, performer: performer, genre: genre,
        price: price, day: day, image: image
      }
    );
    res.json({ message: 'OK. Concert added' });
  }
});

router.route('/concerts/:id').put((req, res) => {
  const { performer, genre, price, day, image } = req.body;
  const edited = db.concerts[req.params.id - 1];

  if (!performer && !genre && !price && !day && !image) {
    res.status(400).json({ message: 'Validation error! You need to supply either performer, genre, price, day or image to add a concert' });
    return;
  }

  if (performer) { edited.performer = performer; }
  if (genre) { edited.genre = genre; }
  if (price) { edited.price = price; }
  if (day) { edited.day = day; }
  if (image) { edited.image = image; }

  res.json({ message: 'OK. Concert changed' });
});

router.route('/concerts/:id').delete((req, res) => {
  db.concerts = db.concerts.filter((concert) => concert.id != req.params.id);
  //or db.concerts.splice((req.params.id - 1), 1);
  res.json({ message: 'OK. Concert deleted' });
});

module.exports = router;
