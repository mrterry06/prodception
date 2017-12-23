const express = require('express'),
	  app = require('./prod/app.js');

const port = process.argv[2] || 8181;

app.use(express.static(__dirname));

app.listen(port, () => {
	console.log(`project is running on port ${port}`);
});
