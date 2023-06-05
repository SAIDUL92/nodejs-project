const http = require('http');
const express = require('express');
const app = express()


// const routes = require('./routes')
// const server = http.createServer(routes)
const server = http.createServer(app)

server.listen(3000)
