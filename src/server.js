const http = require('http');
const server = http.createServer(handleRequest);
const port = 3000;
server.listen(port, () => console.log(`Server running at http://localhost:${port}`));


function handleRequest(request, response) {
	var requestName = request.url.toLowerCase();
	if (requestName.indexOf('?') > -1) {
		requestName = requestName.substring(0, requestName.indexOf('?'));
	}
	
	console.log('Received request url: ' + requestName);
	switch(requestName) {
		case "/heartrate":
			response.writeHead(200, { 'Content-Type': 'application/json' });
			response.write(JSON.stringify({
				'success': 1,
				'heartRate': 99
			}));
	}

	// Done with request.
	response.end();
}
