const express = require('express');
const PersonController = require('./controllers/PersonController');
const LeasingController = require('./controllers/LeasingController')

const routes = express.Router();

//POST
routes.post('/person', PersonController.store)
routes.post('/leasing', LeasingController.store)

//GET
routes.get('/person/:id', PersonController.index)
routes.get('/leasing/:leasingId', LeasingController.findLeasingById)

module.exports = routes;