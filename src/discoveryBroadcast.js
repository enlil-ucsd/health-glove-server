const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

const MULTICAST_IP = "224.0.0.116";
const MULTICAST_PORT = 3333;
const BROADCAST_MSG = new Buffer('{"name":"HealthGlove", "port": 3000}');

socket.bind(MULTICAST_PORT, () => {
	socket.setBroadcast(true);
	socket.addMembership(MULTICAST_IP);
});

setInterval(broadcast, 1000);

function broadcast() {
	socket.send(BROADCAST_MSG, MULTICAST_PORT, MULTICAST_IP);
}
