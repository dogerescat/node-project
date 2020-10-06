const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('./register.ejs', { messageNumber: 0 });
});

app.get('/login', (req, res) => {
  res.render('./login.ejs');
});

app.get('/dashboard', (req, res) => {
  if (
    !req.query.name ||
    !req.query.email ||
    !req.query.password ||
    !req.query.confirm
  ) {
    res.render('./register.ejs', { messageNumber: 1 });
  } else if (req.query.password.length <= 7) {
    res.render('./register.ejs', { messageNumber: 2 });
  } else if (req.query.password !== req.query.confirm) {
    res.render('./register.ejs', { messageNumber: 3 });
  } else {
    res.render('./dashboard.ejs', { name: req.query.name });
  }
});

app.listen(3000);
