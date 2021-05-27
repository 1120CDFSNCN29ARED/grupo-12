let db = require("../database/models")

var cookieParser = require('cookie-parser')

module.exports = {
    detail: (req, res, next) => {
        db.Product.findByPk(req.params.id).then(
            function(product) {
                res.render('productdetail', {product: product, req: req});
            }
        )
    },

    createProduct: (req, res) => {
        console.log('Create Product')
        db.Category.findAll().then(
            (categories) => {
                res.render('create-product', {categories: categories})
            }
        )
    },

    saveProduct: (req, res) => {
        console.log(req.file)
        db.Product.create({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_discount: req.body.product_discount,
            product_description: req.body.product_description,
            product_image: req.file.filename,
            product_gender_id: req.body.product_gender_id,
            product_category_id: req.body.product_category_id,
        }).then(
            res.redirect('/control-panel')
        );
        
    },

    editProduct: (req, res) => {
        let productRequest = db.Product.findByPk(req.params.id)
        let genderRequest = db.Gender.findAll();
        let categoryRequest = db.Category.findAll();

        Promise.all([productRequest, genderRequest, categoryRequest])
        .then(([product, genders, categories]) => {
            res.render('edit-product', {product: product, genders: genders, categories: categories, req: req})
        })
    },

    updateProduct: (req, res) => {
        db.Product.update({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_discount: req.body.product_discount,
            product_description: req.body.product_description,
            product_image: req.file.filename,
            product_gender_id: req.body.product_gender_id,
            product_category_id: req.body.product_category_id,
        }, {
            where: {
                id: req.params.id
            }
        }).then(
            res.redirect('/product/' + req.params.id)
        )

        
    },

    deleteProduct: (req, res) => {
        console.log('delete')
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(
            res.redirect('/control-panel')
        )
    },


    buyNow: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let cart = req.cookies.shoppingCart
                if (!cart) {
                    res.cookie('shoppingCart', product.id, { expire: new Date() + 10 })
                    res.redirect('/shopping-cart')
                } else {
                    res.cookie('shoppingCart', cart + '-' + product.id)
                    res.redirect('/shopping-cart')
                }
            })
    },

    addToCart: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            let cart = req.cookies.shoppingCart
            if (!cart) {
                res.cookie('shoppingCart', product.id, { expire: new Date() + 10 })
                res.redirect('/')
            } else {
                res.cookie('shoppingCart', cart + '-' + product.id)
                res.redirect('/')
            }
        })
    },

    startPayment: (req, res) => {
        let cart = req.cookies.shoppingCart;
        let loggedUserId = req.cookies.loggedUserId;
        if (!cart) {
            res.redirect('/')
        } else if (loggedUserId != ''){
            res.clearCookie('shoppingCart')
            db.Sell.create({
                buyer_id: loggedUserId,
                products_id: cart,
                sell_date: new Date()
            }).then(
                res.redirect('/')
            )            
        }
    }
}