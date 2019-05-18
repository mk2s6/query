var express = require('express');
var parser = require('body-parser');
var app = express();
var orders = require('./orders1.json');

app.use(express.static(__dirname));
app.use(parser.json());

const port = process.env.PORT || 8080;
app.listen(port, function() {
	// body...
	console.log("server listening ");
});


var currentId = 4;

app.get('/orders', function(req , res){
	res.send({orders: orders});
});

app.post('/orders', function(req, res) {
	var newName = req.body.name;
	var newDrink = req.body.drink;
	currentId++;
	orders.push({
		id: currentId,
		name: newName,
		drink: newDrink
	});
	res.send("Success");
});
