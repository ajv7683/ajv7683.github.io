
'use strict';

const express = require('express');

const app = express();
const db = require('./queries')

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

//app.get('/', db.getTasks)

// Start the server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;