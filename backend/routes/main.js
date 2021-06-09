var express = require('express');
var router = express.Router();
const controller = require("../controllers/mainController");
const validationsLogin = require("../validations/validateLogin")

router.get('/', controller.home);
router.post("/", controller.home);
router.get('/control-panel', controller.controlPanel);

router.get('/register-login', controller.registerLogin);
router.post('/checkLogin', validationsLogin, controller.checkLogin);
router.get('/shopping-cart', controller.cart);

module.exports = router;
