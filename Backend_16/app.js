const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", function(req, res){
    res.send("hey");
})

app.get("/create", async function(req, res){
    let user = await userModel.create({
        username : "harsh",
        age : 25,
        email : "harsh@gmail.com"
    })
    res.send(user);
})

app.get("/post/create", async function(req, res){
    let userId = "686b7b46b314128968377e36";

    let post = await postModel.create({
        postdata : "Hello",
        user : userId
    })

    let user = await userModel.findOne({_id: "686b7b46b314128968377e36"});
    user.posts.push(post._id);
    await user.save();
    res.json({ post, user });

})

app.listen(3000);