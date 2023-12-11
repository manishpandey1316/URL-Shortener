const URLrouter = require('./route/url')
const path = require('path')
require('dotenv').config()
const mongoose=require('mongoose')
const express = require('express')
const server  = express();

server.set('view engine','ejs')
async function main()
{
    await mongoose.connect(process.env.MONGO_URL)
}
main()

server.use(express.static(path.join(__dirname, 'view')));
server.use(express.urlencoded())
server.use(express.json())
server.use('/url',URLrouter.router)
server.listen(8080);
