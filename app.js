const http = require('http');
const express = require('express');
const app = express()


// const routes = require('./routes')
// const server = http.createServer(routes)

app.use((req, res, next) => {

    console.log('First middleware');
    next()

})


app.use((req, res, next) => {

    console.log('Second middleware');

})


const server = http.createServer(app)

server.listen(3000)
