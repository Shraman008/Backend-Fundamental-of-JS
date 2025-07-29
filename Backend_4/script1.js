const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Hello World, this is shraman');
})

app.get('/about', function(req, res){
    res.send('About page hai ye');
  })

app.get('/profile', function(req, res, next){
  return next(new Error("something went wrong"));
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000);
