// const express = require('express');
// const hbs = require('hbs');
// const fs = require('fs');
//
// var app = express();
//
// hbs.registerPartials(__dirname + '/views/partials');
// hbs.registerHelper('getCurrentYear', () => {
//   return new Date().getFullYear()
// });
// hbs.registerHelper('screamIt', (text) => {
//   return text.toUpperCase();
// });
// app.use((req, res, next) => {
//   var now = new Date().toString();
//   const log = `${now}: ${req.method} ${req.url}`;
//   console.log(log);
//   fs.appendFile('server.log', log + '\n', (err) => {
//     if(err){
//       console.log('Unable to append to server.log');
//     }
//   });
//   next();
// });
//
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });
//
// app.use(express.static(__dirname + '/public'));
//
// app.set('view engine', 'hbs');
// app.get('/', (req, res) => {
//   res.render('home.hbs', {
//     pageTitle: 'Home page',
//     welcomeMessage: 'Welcome to my website.',
//   });
// });
//
// app.get('/about', (req, res) => {
//   res.render('about.hbs', {
//     pageTitle: 'About page',
//   });
// });
//
// app.get('/bad', (req, res) => {
//   res.send({
//     errorMessage: 'Unable to handle request'
//   });
// });
//
// app.listen(3000, () => {
//   console.log('Server is up on port 3000');
// });

const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.use((req, res, next) => {
  //res.render('maintenance.hbs');
  next();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'TITLE OF PAGE',
    welcomeMessage: 'Welcome to my website',
  });
});



app.listen(3000, () => {
  console.log('Server is up on port 3000');
});