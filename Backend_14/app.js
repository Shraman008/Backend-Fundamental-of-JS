const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cookieParser());

// Set a simple cookie
app.get("/set-cookie", function(req, res){
    res.cookie("name", "harsh");
    res.send("Cookie set");
});

// Read all cookies
app.get("/read-cookie", function(req, res){
    console.log(req.cookies);
    res.send("Cookies read");
});

// Hash password
app.get("/hash", function(req, res){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("pocoloco", salt, function(err, hash) {
            console.log("Hash:", hash);
            res.send("Password hashed");
        });
    });
});

// Compare password
app.get("/compare", function(req, res){
    bcrypt.compare("pocoloco", "$2b$10$g9P0FGRo9JKGZKbU.2tqROjqyUW4H.uD0E9kE8O/JNTFA6KLGnVTO", function(err, result) {
        console.log("Match:", result);
        res.send("Password checked");
    });
});

// Set JWT token
app.get("/set-token", function(req, res){
    let token = jwt.sign({email: "harsh@gmail.com"}, "secret");
    res.cookie("token", token);
    res.send("Token set");
});

// Verify JWT token
app.get("/verify-token", function(req, res){
    try {
        let data = jwt.verify(req.cookies.token, "secret");
        console.log("Token data:", data);
        res.send("Token verified");
    } catch (e) {
        res.send("Invalid or expired token");
    }
});

app.listen(3000);
