const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));

app.listen(5000,(req,res) => {
    console.log("Server started at port 3000");
})
