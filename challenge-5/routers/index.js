const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.get('/', (req, res) => res.status(200).json({message: "welcome to blog api"}));

router.get('/products', product.index); // get all product
router.get('/products/:product_id', product.show); // get detail product
router.post('/products', product.store); // create new product
router.put('/products/:product_id', product.update); // update product
router.delete('/products/:product_id', product.destroy); // delete product


module.exports = router;