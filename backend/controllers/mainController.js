const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt')
const db = require('../database/models/index.js');
const { validationResult } = require("express-validator");

const adminList = ['1', '2']

const controller = {
    home: (req, res) => {
        db.Product.findAll().then(
            function (products) {
                res.render('home', { products: products, req });
            }
        )
    },
    controlPanel: (req, res) => {
        if (req.cookies.encripted && req.cookies.loggedUserId) {
            db.User.findAll({ where: { id: adminList } }).then(admins => {
                admins.forEach(admin => {
                    console.log(admin.dataValues.encripted, req.cookies.encripted);
                    if (admin.dataValues.encripted == req.cookies.encripted) {
                        db.Product.findAll().then(products => {
                            return res.render('control-panel', { products: products, req });
                        })
                    }
                });
            })
        } else {
            res.redirect('/')
        }

    },
    registerLogin: (req, res) => {
        db.Gender.findAll().then(
            function (genders) {
                res.render('register-login', { genders: genders, results: false, validationErrors: false, req });
            }
        )
    },
    checkLogin: (req, res) => {
        db.Gender.findAll().then(function (genders) {
            let results = validationResult(req)
            if (results.isEmpty()) {
                db.User.findOne({ where: { user_email: `${req.body.email}` } }).then((user) => {
                    res.cookie('loggedUserId', user.id, { expire: new Date() + 10 })
                    res.cookie('encripted', user.encripted, { expire: new Date() + 10 })
                    res.redirect("/")
                })
            } else {
                res.render("register-login", { results: results, genders: genders, validationErrors: false, req })
            }
        });
    },
    cart: (req, res) => {

        let cart = req.cookies.shoppingCart;

        function amountCounter(cartItems) {
            let a = [], b = [], previous;

            cartItems.sort();
            for (let i = 0; i < cartItems.length; i++) {
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

        if (req.cookies.shoppingCart) {
            let cartProducts = cart.split('-');
            const amountItems = amountCounter(cartProducts);
            db.Product.findAll({
                where: {
                    id: amountItems[0]
                }
            }).then(
                function (products) {

                    let uniqueId = amountItems[0]
                    let idRepeats = amountItems[1]
                    let obj = {}

                    function matchingIdAmount(id, i) {
                        obj[uniqueId[i]] = idRepeats[i];
                        return obj;
                    }
                    let amountOf = uniqueId.map(matchingIdAmount)
                    res.render('shopping-cart', { products: products, cartProducts: true, req, amountItems: amountItems[1], amountOf: amountOf[0] });
                }
            )
        } else {
            db.Product.findAll().then(
                function (products) {
                    res.render('shopping-cart', { products: products, cartProducts: false, req });
                }
            )
        }

    },

    createUser: (req, res) => {
        let validationErrors = validationResult(req);

        if (validationErrors.isEmpty()) {
            db.User.create({
                encripted: '',
                user_fullname: req.body.user_fullname,
                user_email: req.body.user_email,
                user_profileimage: req.file.filename,
                user_birthdate: req.body.user_birthdate,
                user_adress: req.body.user_adress,
                user_gender_id: req.body.user_gender_id,
                user_password: bcrypt.hashSync(req.body.user_password, 10),
            }).then(async () => {
                user = await db.User.findOne({ where: { user_email: req.body.user_email } })
                let encriptedId = bcrypt.hashSync(user.id.toString(), 2)
                let slicedEncriptedId = encriptedId.slice(1, 15)
                await db.User.update({ encripted: slicedEncriptedId }, { where: { user_email: req.body.user_email } })

                res.cookie('loggedUserId', user.id, { expire: new Date() + 10 })
                res.cookie('encripted', slicedEncriptedId, { expire: new Date() + 10 })
                res.redirect('/')
            },
            )
        } else {
            db.Gender.findAll().then(function (genders) {
                res.render('register-login', { genders: genders, validationErrors: validationErrors, results: false, req })
            });
        }
    }

}

module.exports = controller;