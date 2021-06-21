var express = require('express');
var router = express.Router();

const productController = require('../apiServices/products/products.controller');

router.get('/', productController.getProducts)
  
router.get('/:id', productController.getProductById)

router.post('/', productController.createProduct)

router.put('/:id', productController.editProduct)
  
router.delete('/', productController.deleteAllProducts)

router.delete('/:id', productController.deleteProductById)

module.exports = router;