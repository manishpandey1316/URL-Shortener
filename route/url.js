const controller = require('../controller/url')
const express = require('express')
const URLrouter = express.Router();
URLrouter
.get('/',controller.home)
.post('/short',controller.getShortURL)
.get('/:id',controller.getLongURL)


exports.router = URLrouter