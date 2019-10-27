const express = require('express');
const PersonController = require('./controllers/PersonController');
const BookController = require('./controllers/BookController')

const routes = express.Router();

//POST
routes.post('/person', PersonController.store)
routes.post('/book', BookController.store)

//GET
routes.get('/person/:id', PersonController.index)
routes.get('/book/:bookingId', BookController.findBookById)
routes.get('/book', BookController.findAll)

module.exports = routes;