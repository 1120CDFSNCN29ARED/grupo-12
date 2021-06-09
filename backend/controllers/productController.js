const db = require("../database/models")
const bcrypt = require('bcrypt')


module.exports = {
    detail: (req, res, next) => {
        db.Product.findByPk(req.params.id).then(
            function (product) {
                res.render('productdetail', { product: product, req: req });
            }
        )
    },

    createProduct: (req, res) => {
        console.log('Create Product')
        db.Category.findAll().then(
            (categories) => {
                res.render('create-product', { categories: categories, req: req })
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

    editProduct: async (req, res) => {
        let productRequest = db.Product.findByPk(req.params.id)
        let genderRequest = db.Gender.findAll();
        let categoryRequest = db.Category.findAll();

        Promise.all([productRequest, genderRequest, categoryRequest])
            .then(([product, genders, categories]) => {
                res.render('edit-product', { product: product, genders: genders, categories: categories, req: req })
            })
    },

    updateProduct: (req, res) => {
        db.Product.update({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_discount: req.body.product_discount,
            product_description: req.body.product_description,
            product_image: req.body.filename,
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
        if (req.cookies.loggedUserId == undefined || req.cookies.loggedUserId == 'false') {
            res.redirect('/register-login')
        }
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
        if (req.cookies.loggedUserId == undefined || req.cookies.loggedUserId == 'false') {
            res.redirect('/register-login')
        }
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
        if (req.cookies.loggedUserId == undefined || req.cookies.loggedUserId == 'false') {
            res.redirect('/register-login')
        }
        let cart = req.cookies.shoppingCart;

        db.User.findByPk(req.cookies.loggedUserId, {attributes : ['id', 'encripted']}).then(user => {
            let userId = user.dataValues.id;
            let userEncripted = user.dataValues.encripted;
            console.log(user, userId, userEncripted);
            if (!cart) {
                res.redirect('/')
            } else if (userId != '' && req.cookies.encripted == userEncripted) {
                res.clearCookie('shoppingCart')
                console.log('COOKIE CLEARED'),
                db.Sell.create({
                    buyer_id: userId,
                    products_id: cart,
                    sell_date: new Date()
                }).then(
                    console.log('REDIRECTED'),
                    res.redirect('/')
                )
            }else{
                console.log('ERROR');
            }
        })
    }
}