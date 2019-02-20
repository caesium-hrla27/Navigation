const express = require('express');
const path = require('path');
const parser = require('body-parser');

const router = require('./router.js');

// Define Port
const PORT = 3306;

// Create express app
const app = express();

// Allow server requests to handle json and nested objects
app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));

// Serve static file directories
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

// Launch server on Port defined above
let server = app.listen(PORT, (err) => {
  if (err) {
    console.log('Unable to connect to PORT, ', PORT, ' with error: ', err);
  } else {
    console.log('Successfully connected to PORT: ', PORT);
  }
});
