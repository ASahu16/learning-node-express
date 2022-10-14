const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        /**
         * Sends a chunk of the body. This method can be called multiple times. 
         * If no Content-Length is set, data will automatically be encoded in HTTP Chunked transfer encoding, 
         * so that server knows when the data ends. 
         * The Transfer-Encoding: chunked header is added. 
         * Calling request.end() is necessary to finish sending the request.
         */
        response.write('Welcome to our home page');
        response.end();
    }
    else if (request.url === '/about') {
        /**
         * Finishes sending the request. If any parts of the body are unsent, it will flush them to the stream. 
         * If the request is chunked, this will send the terminating '0\r\n\r\n'.
         * 
         * If data is specified, it is equivalent to calling request.write(data, encoding) followed by request.end(callback).
         * 
         * If callback is specified, it will be called when the request stream is finished.
         */
        response.end('Welcome to about page');
    }
    else {
        response.end(`
    <h1>Opps!</h1>
    <p>Page not found</p>
    <a href="/">Home</a>
    `);
    }
});

server.listen(5000);