const URLrouter = require('./route/url')
const path = require('path')
const express = require('express')
const server  = express();
server.set('view engine','ejs')
server.use(express.static(path.join(__dirname, 'view')));
server.use(express.urlencoded())
server.use(express.json())
server.use('/url',URLrouter.router)
server.listen(8080);