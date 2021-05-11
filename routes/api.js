const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, '../public/img');
        cb(null, folder)
    },
    filename: (req, file, cb) => {
        console.log(file)
        let imageName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, imageName)
    }
})

const upload = multer({ storage });

const controller = require('../controllers/apiController')

router.get('/create', controller.createProduct);
router.post('/create', upload.single('product_image'), controller.saveProduct);

router.get('/edit/:id', controller.editProduct);
router.post('/edit/:id', upload.single('product_image'), controller.updateProduct);

router.post('/delete/:id', controller.deleteProduct)

router.get('/buyNow/:id', controller.buyNow);


module.exports = router;