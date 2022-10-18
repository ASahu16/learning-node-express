const http = require('http');

// Using Event Emitter API
const server = http.createServer();

/**
 * Behing the scenes server emits the `request` event
 * Thus we can listen to it.
 * 
 * subscribe to it / listen for it / respond to it
 */
server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(5000);