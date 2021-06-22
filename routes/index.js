var express = require('express');
var router = express.Router();

const productController = require('../apiServices/products/products.controller');
const authMiddleware = require('../middlewares/auth');
const { validateToken } = authMiddleware;

router.get('/', validateToken , productController.getProducts);
  
router.get('/:id', validateToken, productController.getProductById);

router.post('/', validateToken, productController.createProduct);

router.put('/:id', validateToken, productController.editProduct);
  
router.delete('/', validateToken, productController.deleteAllProducts);

router.delete('/:id', validateToken, productController.deleteProductById);

module.exports = router;