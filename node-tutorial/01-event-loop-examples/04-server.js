const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})

/**
 * Once we run the above code,
 * event loop is just waiting for the requrests to come in 
 * and then once they come in.
 * Our callback gets run.
 * 
 * All this was possible with the help of `listen()`,
 * which is asynchronous.
 * process stays alive unless: 
 * Kill Process CONTROL + C
 * unexpected error
 */