var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleWare = require('./middleware.js'); //Import function from ext. file!

app.use(middleWare.logger);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.send('Hello Express!');
});

app.get('/about', middleWare.requireAuthentication, function (req, res) {
	res.send('About Us!');
});



app.listen(PORT, function() {
	console.log('Express server started on ' + PORT + '!');
});