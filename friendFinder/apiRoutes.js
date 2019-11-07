 var express = require ("express");
 var mysql = require ("mysql");
 var path = require ("path");
 var connection = mysql.create.connection({

host: "localhost",
port: 8080,
user: "root",
password: "Jjuniortoes.1",
database: "football_players_db"

 })


 var PORT = process.env.PORT || 8080;

 var app = express 

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());


 app.get("/api/friends", function(req, res){
     
res.send(req.params)


    if (tableDate.length < 5) {
        tableDate.push(req.body);
        res.join(true);

    }

    else{
        waitListData.push(req.body);
        res.json(false)
    }
 })

 
 app.post("/app/friends", function(req, res){
     



    if (tableDate.length < 5) {
        tableDate.push(req.body);
        res.join(true);

    }

    else{
        waitListData.push(req.body);
        res.json(false)
    }
 })


 app.listen(port, function (){

    console.log("server listening on:http://localhost:" + PORT);
 });