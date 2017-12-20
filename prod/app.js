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
	res.send(true);
});

app.post('/contact/message', (req, res) => {
	res.send(true);
});

module.exports = app;