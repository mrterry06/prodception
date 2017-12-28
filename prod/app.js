const express = require('express'),
		bodyParser = require('body-parser'),
		morgan = require('morgan'),
		mailer = require('./mailer'),
		app = express(),
		port = 8080;

app.use(bodyParser.urlencoded({
	extended: true
}))

.use(bodyParser.json())

/* log requests to console */
.use(morgan('dev'));

app.post('/client/apply', (req, res) => {
	mailer(req.body, (wasSent) => {
		res.send(wasSent);
	});
});

app.post('/contact/message', (req, res) => {
	mailer(req.body, (wasSent) => {
		res.send(wasSent);
	});
});

module.exports = app;