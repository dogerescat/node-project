const express = require('express');
const { validationResult } = require('express-validator');
const app = express();
const validator = require('./validation.js');

app.get('/', (req, res) => {
  res.render('./register.ejs', { error: '' });
});

app.get('/login', (req, res) => {
  res.render('./login.ejs');
});

app.get('/dashboard', validator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render('./register.ejs', { error: errors.array()[0].msg });
  } else {
    res.render('./dashboard.ejs', { name: req.query.name });
  }
});

app.listen(3000);
