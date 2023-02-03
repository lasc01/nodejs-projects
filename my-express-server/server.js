const express = require("express");

const app = express();

const port = 3000;

app.get("/", function(req, res){
	res.send("<h1>WE ARE BACK AGAIN!</h1>")
});

app.get("/about", function(req, res){
	res.send("My name is Olamide, I'm a very passionate person who ensures he gets whatever he lays his mind on. I am strivving to become a full-stack web developer. Even though, it seems a bit difficult at the moment, I still believe that I am going to achieve the goal in the nearest future")
});

app.get("/hobbies", function(req, res){
	res.send("<ul><li>Football</li> <li>DJ</li> <li> Scrabble </li> </ul>")
});

app.listen(port, function(){
	console.log("I'm running on a server 3000")
});
