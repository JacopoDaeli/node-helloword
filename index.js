'use strict'

// Load the http module to create an http server.
const http = require('http')

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World (Staging)\n')
})

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080, '0.0.0.0')

// Put a friendly message on the terminal
console.log('Server running at http://0.0.0.0:8080/')
