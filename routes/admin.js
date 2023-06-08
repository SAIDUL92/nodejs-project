
const express = require("express");
const router = express.Router();

const productController = require('../controllers/products');

// Get products
router.get("/add-product", productController.getProduct);


// post products
router.post("/add-product", productController.postProduct);

module.exports = router
