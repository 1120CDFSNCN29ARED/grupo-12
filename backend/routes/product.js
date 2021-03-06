var express = require('express');
var router = express.Router();
const multer = require('multer')
const path = require('path')
const controller = require('../controllers/productController')

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


router.post('/startPayment', controller.startPayment)

router.get('/create', controller.createProduct);
router.post('/create', upload.single('product_image'), controller.saveProduct);

router.get('/edit/:id', controller.editProduct);
router.post('/edit/:id', upload.single('product_image'), controller.updateProduct);



router.get('/:id/', controller.detail);

router.post('/delete/:id', controller.deleteProduct)

router.get('/buyNow/:id', controller.buyNow);
router.post('/addToCart/:id', controller.addToCart)


module.exports = router;