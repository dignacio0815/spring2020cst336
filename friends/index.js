/* EJS = embedded JavaScript 
    1. NodeJS looks for ejs files in "views"
    2. ejs files end with .ejs
    3. Have to let know NodeJS engine that we are using ejs
*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// lets NodeJS know we are using ejs
app.use(express.static("css"));
// needed to receive something from the user if they use the POST method
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    // res.send("Hello world");
    res.render("home");
})


var friendList = ["Alice", "Clark", "Bellemy", "Octavia"]
app.get("/friends", function(req, res) {
    res.render("friends", {friends: friendList});
})

app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friendList.push(newFriend);
    res.redirect("/friends");
})

app.post("/removefriend", function(req, res) {
    friendList.pop();
    res.redirect("/friends")
})

app.get("*", function(req, res) {
    // res.send("Page not found");
    res.render("error");
})

app.listen(process.env.PORT, function() {
    console.log("Server is up and running");
})

// var server = app.listen(3000, function() {
    
// })