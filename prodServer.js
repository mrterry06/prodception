const express = require('express'),
		app = express(),
		port = 8080;



app.post('/client/apply', (req, res) => {
	
});


app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
