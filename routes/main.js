var express = require('express');
var router = express.Router();

const controller = require("../controllers/mainController");

router.get('/', controller.home);
router.get('/register-login', controller.registerLogin)
router.get('/shopping-cart', controller.cart)

module.exports = router;
