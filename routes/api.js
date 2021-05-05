var express = require('express');
var router = express.Router();

const controller = require('../controllers/apiController')

router.get('/', controller.test);
router.get('/buyNow/:id', controller.buyNow);
router.post('/create', controller.create)
router.delete('/delete/:id', controller.delete)


module.exports = router;