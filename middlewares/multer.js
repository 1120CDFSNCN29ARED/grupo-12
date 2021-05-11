
const multer = require('multer')


const storage = multer.diskStorage({
    destiantion: './public/img',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
}).single('product_image');

function middleware(req, res, next) {
    console.log('MULTER')
    upload(req, res, (err) => {
        if(err) {
            res.render('create-product', {msg: err})
        }else{
            console.log(req.file)
            next()
        }
    })
};



module.exports = middleware