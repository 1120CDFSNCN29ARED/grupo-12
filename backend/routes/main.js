var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");
const controller = require("../controllers/mainController");
const validationsLogin = require ("../validations/validateLogin")
const validationsCreate = require ("../validations/validateCreate")


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = path.join(__dirname, "../public/img");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    let imageName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});

router.get('/', controller.home);
router.post("/", controller.home);
router.get('/control-panel', controller.controlPanel);


const upload = multer({ storage });

router.get('/register-login',  controller.registerLogin);
router.post('/register-login' , upload.single('user_profileimage'), validationsCreate , controller.createUser)
router.post('/checkLogin', validationsLogin, controller.checkLogin);
router.get('/shopping-cart', controller.cart);

module.exports = router;