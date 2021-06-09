var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");
const controller = require("../controllers/userController");
const validationsCreate = require("../validations/validateCreate")

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

const upload = multer({ storage });


router.get('/edit/:id', controller.editUser);
router.post('/edit/:id', upload.single('user_profileimage'), controller.updateUser);


router.post('/delete/:id', controller.deleteUser)



router.post('/register-login', upload.single('user_profileimage'), validationsCreate, controller.createUser)

module.exports = router;