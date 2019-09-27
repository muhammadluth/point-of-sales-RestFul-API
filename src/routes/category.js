const express = require('express')
const Route = express.Router()

// import controller
const categoryController = require('../controllers/category')

Route
  .get('/', categoryController.getCategory)
  .post('/', categoryController.addCategory)
  .put('/:id', categoryController.updateCategory)
  .delete('/:id', categoryController.deleteCategory)

module.exports = Route
