const express = require('express');
const session = require('express-session');
var path = require("path");

const app = express();
app.use(session({ secret: 'XXassasas¨¨$', resave: false, saveUninitialized: true }));

app.use(express.static(__dirname + '/pug'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/html/index.pug'));
})

app.get('/comojogar', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/html/comojogar.pug'));
})

app.get('/jogar', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/html/jogar.pug'));
})

app.get('/sobre', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/html/sobre.pug'));
})

app.listen(3000, () => {
  console.log('Listening on localhost:3000');
})
