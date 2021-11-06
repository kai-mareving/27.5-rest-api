const express = require('express');
const router = express.Router();
const db = require('../db');

//get all testimonials
router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});

router.route('/testimonials/random').get((req, res) => {
  const randID = Math.floor(Math.random() * db.testimonials.length);
  res.json(db.testimonials[randID]);
});

//! dynamic routing needs to be defined ::AFTER:: static routes
router.route('/testimonials/:id').get((req, res) => {
  res.json(db.testimonials[req.params.id - 1]);
});

router.route('/testimonials').post((req, res) => {
  const { author, text } = req.body;
  const nextId = db.testimonials.length + 1;

  if (!author || !text) {
    res.status(400).json({ message: 'Validation error! You need to supply author and text to add a testimonial' });
    return;
  } else {
    db.testimonials.push({ id: nextId, author: author, text: text });
    // res.json(db.testimonials);
    res.json({ message: 'OK. Testimonial added' });
  }
});

router.route('/testimonials/:id').put((req, res) => {
  const { author, text } = req.body;
  const edited = db.testimonials[req.params.id - 1];

  if (!author && !text) {
    res.status(400).json({ message: 'Validation error! You need to supply either author or text to change testimonial' });
    return;
  }
  if (author) { edited.author = author; }
  if(text){ edited.text = text; }
  // res.json(db.testimonials);
  res.status(200).json({ message: 'OK. Testimonial changed' });
});

router.route('/testimonials/:id').delete((req, res) => {
  db.testimonials = db.testimonials.filter((testimonial) => testimonial.id != req.params.id);
  //or db.testimonials.splice((req.params.id - 1), 1);
  res.json({ message: 'OK. Testimonial deleted' });
});

//? in server.js:
//or app.delete('/testimonials/:id', (req, res) => { res.json({ message: 'OK. Testimonial deleted' }); });

module.exports = router;
