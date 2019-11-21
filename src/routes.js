const express = require("express");
const BookController = require("./controllers/BookController");

const routes = express.Router();

//POST
routes.post("/book", BookController.store);

//GET
routes.get("/book/:bookingId", BookController.findBookById);
routes.get("/book", BookController.findAll);

//PUT
routes.put("/book/:id", BookController.update);

module.exports = routes;
