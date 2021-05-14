var express = require('express');
var router = express.Router();

const controller = require("../controllers/mainController");

router.get('/', controller.home);

router.get('/control-panel', controller.controlPanel);


router.get('/register-login', controller.registerLogin);
router.post('/register-login', controller.createUser);

router.get('/shopping-cart', controller.cart);

module.exports = router;
