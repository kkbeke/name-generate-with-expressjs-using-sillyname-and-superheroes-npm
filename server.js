//jshint esversion:6

const express = require("express");
const app = express();

const superheroes = require("superheroes");
var superName = superheroes.random();

var generateName = require("sillyname");
var sillyName = generateName();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    res.send("<h1>Your name is " + sillyName + ", and My superhero name is "+ superName +"</h1>")

});







app.listen(3000, function(){
    console.log("server is running...");
});