const nbind = require('nbind');
const http = require('http');

// Start Heart Rate Sensor
console.log('Starting heart rate sensor...');
var lib = nbind.init().lib;
var hrs = new lib.HRSInterface();

// Start Server
console.log('Starting server...');
const server = http.createServer(handleRequest);
const port = 3000;
server.listen(port, () => console.log(`Server running at http://localhost:${port}`));

// Function called when recieved get request
function handleRequest(request, response) {
	var requestName = request.url.toLowerCase();
	if (requestName.indexOf('?') > -1) {
		requestName = requestName.substring(0, requestName.indexOf('?'));
	}
	
//	console.log('Received request: ' + requestName);
	switch(requestName) {
		case "/startheartrate":
			hrs.start();
			respondJson({ 'success': 1 });
			break;
		case "/stopheartrate":
			hrs.stop();
			respondJson({ 'success': 1 });
			break;
		case "/heartrate":
			respondJson({
				'success': 1,
				'heartRate': hrs.getSafeHeartRate()
			});
			break;
		case "/temperature":
			respondJson({
				'success': 1,
				'temperature': hrs.getLatestTemperatureF()
			});
			break;
		case "/temperaturec":
			respondJson({
				'success': 1,
				'temperature': hrs.getLatestTemperatureC()
			});
			break;
	}

	// Done with request.
	response.end();

	function respondJson(json) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.write(JSON.stringify(json));
	}
}
