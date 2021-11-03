const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* ENDPOINTS */
app.get('/testimonials', (req, res) => {
  res.json(db.testimonials);
});

app.get('/testimonials/:id', (req, res) => {
  res.json(db.testimonials[req.params.id - 1]);
});

app.get('/testimonials/random', (req, res) => {
  const randID = Math.floor(Math.random() * db.testimonials.length);
  res.json(db.testimonials[randID]);
});

app.post('/testimonials', (req, res) => {
  // const { author, text } = req.body;
  // const nextId = db.testimonials.length + 1;
  // res.json(db.testimonials.push({id: nextId, author: author, text: text }));
  res.json({ message: 'OK' });
});

app.put('/testimonials/:id', (req, res) => {
  // const { author, text } = req.body;
  // const edited = db.testimonials[req.params.id - 1];
  // edited.author = author;
  // edited.text = text;
  // res.json(db.testimonials);
  res.json({ message: 'OK' });
});

app.delete('/testimonials/:id', (req, res) => {
  // res.json(db.splice((req.params.id - 1), 1));
  res.json({ message: 'OK' });
});

app.use((req, res) => {
  res.status(404).send( { message: 'Not found...' });
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
