const express = require('express')
const controllers = require('../controller/users.js')
const routes = express.Router();    

routes  
.get('/',controllers.getAllProducts)
.get('/:id',controllers.getProduct)
.post('/',controllers.createProduct)
.put ('/:id',controllers.replaceProducts)
.patch('/:id',controllers.updateProduct)
.delete('/:id',controllers.deleteProduct)

exports.routes = routes 