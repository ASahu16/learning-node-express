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