const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.json({
    message: 'Welcome to API',
  });
});

app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  res.status(500);
  res.json({
    message: err.message,
  });
});

module.exports = app;
