const express = require('express');
const session = require('express-session');
var path = require("path");

const app = express();
app.use(session({ secret: 'XXassasas¨¨$', resave: false, saveUninitialized: true }));

app.use(express.static(__dirname + '/html'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/html/index.html'));
})

app.get('/comojogar', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/html/comojogar.html'));
})

app.get('/jogar', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/html/jogar.html'));
})

app.get('/sobre', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/html/sobre.html'));
})

app.listen(3000, () => {
  console.log('Listening on localhost:3000');
})