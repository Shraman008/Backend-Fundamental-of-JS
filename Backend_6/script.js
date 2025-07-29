// Initialize a project with npm
// install express

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());  // Parsers (use form data at backend)
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); // to get the path to public folder (all the static files will be here)
app.set('view engine', 'ejs'); // render ejs pages

app.get("/", function(req, res){
    res.render("index");
})
app.get("/profile/:username", function(req, res){
    res.send(`welcome, ${req.params.username}`);
})
app.get("/profile/:username/:age", function(req, res){
    res.send(`welcome, ${req.params.username} of age ${req.params.age} `);
})

app.listen(3000, function(){
    console.log("It's Running");
})