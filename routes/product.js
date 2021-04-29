var express = require('express');
var router = express.Router();

const controller = require('../controllers/productController')

router.get('/', controller.detail);
router.get('/buyNow', controller.buyNow);
router.put('/addCart', controller.addCart);

module.exports = router;