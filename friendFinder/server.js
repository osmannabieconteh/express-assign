var express = require("express");
var path = require("path");



app.get("/api/characters", function(req, res){

    return res.json(characters);
});