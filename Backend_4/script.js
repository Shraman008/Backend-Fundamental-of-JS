// EXPRESS.JS FRAMEWORK

// express js ek npm package hai
// framework
// manages everything from receiving the request to giving response
// Routing(/, /profile,...)
// Middleware - anything which is run before routing.....jab bhi server request accept karta hai waha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuch perform karte ho, to ye element middleware kehlata haii
// each time instead of write node script.js use nodemon script.js
// Error Handling

const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log('Middleware chala');
    next();
});

app.use(function(req, res, next){
  console.log('Middleware chala once more');
  next();
});

app.get('/', function(req, res){
  res.send('Hello World, this is shraman');
})

app.get('/profile', function(req, res){
  res.send('Kaisa hai bhaii');
})

app.get('/about', function(req, res){
  res.send('About page hai ye');
})

app.listen(3000);

