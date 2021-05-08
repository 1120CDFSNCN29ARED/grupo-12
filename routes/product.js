var express = require('express');
var router = express.Router();

const controller = require('../controllers/productController')

router.get('/list/', controller.list)
router.get('/:id/', controller.detail);

module.exports = router;