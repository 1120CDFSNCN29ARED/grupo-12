const fs = require('fs');
const path = require('path')

const bcrypt = require('bcrypt')

const db = require('../database/models/index.js');

const controller = {
    home: (req, res) => {
        //const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        db.Product.findAll().then(
            function (products) {
                res.render('home', { products: products });
            }
        )

        //res.render('home', {products: products});
    },
    registerLogin: (req, res) => {
        db.Gender.findAll().then(
            function (genders) {
                res.render('register-login', { genders: genders });
            }
        )
    },
    cart: (req, res) => {
        if (req.cookies.shoppingCart) {
            let cart = req.cookies.shoppingCart
            let cartProducts = cart.split('-')
            db.Product.findAll().then(
                function (products) {
                    console.log(cartProducts)
                    res.render('shopping-cart', { products: products, cartProducts });
                }
            )
        } else {
            let cartProducts
            db.Product.findAll().then(
                function (products) {
                    res.render('shopping-cart', { products: products, cartProducts: cartProducts });
                }
            )
        }

    },    

    createUser: (req, res) => {
        db.User.create({
            user_fullname: req.body.user_fullname,
            user_email: req.body.user_email,
            user_birthdate: req.body.user_birthdate,
            user_adress: req.body.user_adress,
            user_gender_id: req.body.user_gender_id,
            user_password: bcrypt.hashSync(req.body.user_password, 10),
        }).then(
            res.redirect('/')
        );
    }
}

module.exports = controller;