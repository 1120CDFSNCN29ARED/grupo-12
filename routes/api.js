var express = require('express');
var router = express.Router();

const controller = require('../controllers/apiController')

router.get('/create', controller.createProduct);
router.post('/create', controller.saveProduct);

router.get('/edit/:id', controller.editProduct);
router.post('/edit/:id', controller.updateProduct);

router.post('/delete/:id', controller.delete)

router.get('/buyNow/:id', controller.buyNow);


module.exports = router;