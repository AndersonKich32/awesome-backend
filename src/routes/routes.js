const express = require('express')

const Product = require('../controllers/clienteController')

const routes = express.Router()

routes.post('/product', Product.create);
routes.get('/product', Product.index);


module.exports = routes;