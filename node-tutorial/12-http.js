const http = require('http');

const server = http.createServer((request, response) => {
    response.write('Welcome to out home page');
    response.end();
});

server.listen(5000);