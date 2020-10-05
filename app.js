const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    res.render('./register.ejs');
});

app.get('/login', (req, res) => {
    res.render('./login.ejs');
});

app.listen(3000);