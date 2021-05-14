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
    controlPanel: (req, res) => {
        db.Product.findAll().then(
            function (products) {
                res.render('control-panel', { products: products });
            }
        )

    },
    registerLogin: (req, res) => {
        db.Gender.findAll().then(
            function (genders) {
                res.render('register-login', { genders: genders });
            }
        )
    },
    cart: (req, res) => {

        let cart = req.cookies.shoppingCart;

        function amountCounter(cartItems) {
            var a = [], b = [], previous;

            cartItems.sort();
            for (var i = 0; i < cartItems.length; i++) {
                if (cartItems[i] !== previous) {
                    a.push(cartItems[i]);
                    b.push(1);
                } else {
                    b[b.length - 1]++;
                }
                previous = cartItems[i];
            }

            return [a, b];
        };

        let cartProducts

        if (req.cookies.shoppingCart) {
            let cartProducts = cart.split('-');
            const amountItems = amountCounter(cartProducts);
            db.Product.findAll({
                where: {
                    id: amountItems[0]
                }
            }).then(
                function (products) {

                    let uniqueId= amountItems[0]
                    let idRepeats= amountItems[1]
                    let obj = {}

                    function matchingIdAmount(id, i) {
                        obj[uniqueId[i]] = idRepeats[i];
                        return obj;
                    }

                    let amountOf = uniqueId.map(matchingIdAmount)
                    

                    //res.send(amountOf[0])
                    res.render('shopping-cart', { products: products, cartProducts: true, amountItems: amountItems[1], amountOf: amountOf[0] });
                }
            )
        } else {
            db.Product.findAll().then(
                function (products) {
                    res.render('shopping-cart', { products: products, cartProducts: false });
                }
            )
        }

    },

    createUser: (req, res) => {
        db.User.create({
          user_fullname: req.body.user_fullname,
          user_email: req.body.user_email,
          user_profileimage: req.file.filename,
          user_birthdate: req.body.user_birthdate,
          user_adress: req.body.user_adress,
          user_gender_id: req.body.user_gender_id,
          user_password: bcrypt.hashSync(req.body.user_password, 10),
        }).then(res.redirect("/"));
    }
}

module.exports = controller;