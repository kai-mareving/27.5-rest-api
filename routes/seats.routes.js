const express = require('express');
const router = express.Router();
const db = require('../db');

//get all seats
router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

router.route('/seats/random').get((req, res) => {
  const randID = Math.floor(Math.random() * db.seats.length);
  res.json(db.seats[randID]);
});

//! dynamic routing needs to be defined ::AFTER:: static routes
router.route('/seats/:id').get((req, res) => {
  res.json(db.seats[req.params.id - 1]);
});

router.route('/seats').post((req, res) => {
  const { day, seat, client, email } = req.body;
  const nextId = db.seats.length + 1;

  if (!day || !seat || !client || !email) {
    res
      .status(400)
      .json({
        message:
          'Validation error! You need to supply day, seat, client and email to add a seat',
      });
    return;
  }

  db.seats.push({
    id: nextId,
    day: day,
    seat: seat,
    client: client,
    email: email,
  });
  res.json({ message: 'OK. Seat added' });
});

router.route('/seats/:id').put((req, res) => {
  const { day, seat, client, email } = req.body;
  const edited = db.seats[req.params.id - 1];

  if (!day && !seat && !client && !email) {
    res.status(400)
      .json({
        message: 'Validation error! You need to supply either a day, seat, client or email to edit a seat',
      });
    return;
  }

  if (day) { edited.day = day; }
  if (seat) { edited.seat = seat; }
  if (client) { edited.client = client; }
  if (email) { edited.email = email; }

  res.json({ message: `OK. Seat ${req.params.id} changed` });
});

router.route('/seats/:id').delete((req, res) => {
  db.seats = db.seats.filter((seat) => seat.id != req.params.id);
  //or db.seats.splice((req.params.id - 1), 1);
  res.json({ message: `OK. Seat ${req.params.id} deleted` });
});

module.exports = router;
