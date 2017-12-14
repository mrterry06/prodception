var connect = require('gulp-connect'),
	bodyParser = require('body-parser'),
	express = require('express'),
	cors = require('cors');
	port = 8181;

module.exports = function () {

	var server = express();

	server.use(cors());
	server.all('*', function (req, res, next){
		console.log('request is heard');
		next();
	});

	server.listen(3000, function () {
		console.log('Started Mock server on port 3000');
	});

	server.post('/submit', function(req, res) {
		console.log('it is heard');
		res.send(true);
	});

	server.post('/client/application', function () {
		res.send({
			sent: true
		});
	});

	server.post('/contact/message', function (req, res) {
		res.send({
			sent: true
		});
	});

	connect.server({
		livereload: true,
		port: port
	});
}
