var express = require('express');
var router = express.Router();

const multer = require('../middlewares/multer')

const controller = require('../controllers/apiController')

router.get('/create', controller.createProduct);
router.post('/create',multer, controller.saveProduct);

router.get('/edit/:id', controller.editProduct);
router.post('/edit/:id', multer, controller.updateProduct);

router.post('/delete/:id', controller.delete)

router.get('/buyNow/:id', controller.buyNow);


module.exports = router;