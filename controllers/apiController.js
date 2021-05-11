const path = require('path')
var cookieParser = require('cookie-parser')

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const dbJSON = path.join(__dirname, '../database/models/index.js');

const db = require('../database/models/index.js');

const controller = {
    createProduct: (req, res) => {
        console.log('Create Product')
        db.Category.findAll().then(
            (categories) => {
                res.render('create-product', {categories: categories})
            }
        )
    },

    saveProduct: (req, res) => {
        console.log('Save Product')
        db.Product.create({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_discount: req.body.product_discount,
            product_description: req.body.product_description,
            product_image: req.body.product_image,
            product_gender_id: req.body.product_gender_id,
            product_category_id: req.body.product_category_id,
        });
        res.redirect('/product/list')
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
            product_image: req.body.product_image,
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

    delete: (req, res) => {
        console.log('delete')
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/product/list')
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
}

module.exports = controller;