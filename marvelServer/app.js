const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Import Route
const characterRoute = require('./Routes/characters');

//Middleware
app.use('/', characterRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to DB');
  }
);

//Server is listening for requests
app.listen(3001, () => {
  console.log('listening on port 3001');
});
