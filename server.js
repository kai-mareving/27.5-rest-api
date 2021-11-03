const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors()); /* cross site domain request */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* ENDPOINTS */
app.get('/testimonials', (req, res) => {
  res.json(db.testimonials);
});

app.get('/testimonials/random', (req, res) => {
  const randID = Math.floor(Math.random() * db.testimonials.length);
  res.json(db.testimonials[randID]);
});

//! dynamic routing needs to be defined after static routes
app.get('/testimonials/:id', (req, res) => {
  res.json(db.testimonials[req.params.id - 1]);
});


app.post('/testimonials', (req, res) => {
  const { author, text } = req.body;
  const nextId = db.testimonials.length + 1;
  db.testimonials.push({id: nextId, author: author, text: text });
  // res.json(db.testimonials);
  res.json({ message: 'OK' });
});

app.put('/testimonials/:id', (req, res) => {
  const { author, text } = req.body;
  const edited = db.testimonials[req.params.id - 1];
  if(author){
    edited.author = author;
  }
  if(text){
    edited.text = text;
  }
  // res.json(db.testimonials);
  res.json({ message: 'OK' });
});

app.delete('/testimonials/:id', (req, res) => {
  db.testimonials = db.testimonials.filter((testimonial) => testimonial.id != req.params.id);
  //or db.testimonials.splice((req.params.id - 1), 1);
  res.json({ message: 'OK' });
});

app.use((req, res) => {
  res.status(404).send( { message: 'Not found...' });
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
