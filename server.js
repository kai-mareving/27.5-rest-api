const express = require('express');
const cors = require('cors');
// const db = require('./db');

const app = express();

// import routes
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

/* cross site domain request */
 //ASK: are additional options needed here?
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ENDPOINTS */
app.use('/', testimonialsRoutes); // add testimonials routes to server
app.use('/', concertsRoutes); // add concerts routes to server
app.use('/', seatsRoutes); // add seats routes to server

app.use((req, res) => {
  res.status(404).send( { message: 'Page not found...' });
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
