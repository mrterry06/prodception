const connect = require('gulp-connect'),
	bodyParser = require('body-parser'),
	express = require('express'),
	braintree = require('braintree');
	cors = require('cors');
	port = 8181;

const gateway = braintree.connect({
	environment: braintree.Environment.Sandbox,
	merchantId: 'qmqgc3p64fgr6tvx',
	publicKey: '8zr25kz5dpd5f2nm',
	privateKey: '8f6ddb2833c71a007aaf6896f935263d'
});

let paymentProcessed = null;

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
		console.log(req.body);
		res.send({
			sent: true
		});
	});

	server.get('/client-token', function (req, res) {
		gateway.clientToken.generate({}, (err, response) => {
			res.send(response.clientToken);
		});
	});

	server.post('/checkout', function (req, res) {
		gateway.transaction.sale({
			amount: "10.00",
			paymentMethodNonce: nonceFromTheClient,
			options: {
				submitForSettlement: true
			}
		}, function (err, result) {
		});
	});

	server.get('/payment-verification', (req, res) => {
		console.log('would mail stuff here');

		res.send(true ? 'approved' : 'declined');
	});

	connect.server({
		livereload: true,
		port: port
	});
}
