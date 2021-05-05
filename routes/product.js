var express = require('express');
var router = express.Router();

const controller = require('../controllers/productController')

router.get('/', controller.detail);

module.exports = router;