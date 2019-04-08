var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var PORT= 3000; 
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function(){
    console.log("listening on port: "+ PORT)
})
