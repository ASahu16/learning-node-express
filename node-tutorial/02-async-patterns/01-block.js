const http = require('http');


const server = http.createServer((request, response)=>{

    if(request.url === '/')
        response.end('Home Page');
    else if(request.url === '/about'){
        //blocking code
        for(let i = 0; i < 1000; i++)
            for(let j = 0; j < 1000; j++)
                console.log(`${i} ${j}`);
        response.end('About Page');
    }
    else
        response.end('Error Page');
});

server.listen(5000, ()=>{
    console.log('Server started on port: 5000');
})

/**
 * Once we run our server, that is, current file code
 * 
 * If we try to visit http://localhost:5000/about
 * We see that our pages wait for some time and then loads,
 * that's because of the Nested for block on line: 10-12
 * Nesetd for loops blocks the code execution.
 * First it nested loop finishes then only the response is sent back.
 */