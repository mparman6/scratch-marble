var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
	res.sendFile(process.cwd() + "/public/index.html");
});

app.listen(3000, () => {
	console.log('Listening on port 3000...');
});