var http = require('http');
var express = require("express");
var app = express();
var request = require("request");


app.listen(8000, function(){
	console.log("movie app has started");
});


app.set("view engine", "ejs");

app.get("/search", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
     
    var movie = req.query.movie;
    var url = "http://www.omdbapi.com/?apikey=53425478&s=" + movie;
	request(url, function(error, response, body){
      if (!error && response.statusCode == 200) {
           var data = JSON.parse(body);
           
           res.render("results", {data: data});

      }
        
   });
});


