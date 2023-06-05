
const express = require('express');
const app = express()


app.use('/products', (req, res, next) => {

    res.send('<h1>Hello from node js products page</h1>')

})


app.use('/', (req, res, next) => {

    res.send('<h1>Hello from node js home page</h1>')

})


app.listen(3000)
