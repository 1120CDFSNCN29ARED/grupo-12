const fs = require('fs');
const path = require('path')

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const dbJSON = path.join(__dirname, '../database/models/index.js');

const db = require('../database/models/index.js');

const controller = {
    home: (req, res) => {
        //const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        db.Product.findAll().then(
            function(products) {
                res.render('home', {products: products});
            }
        )
        
        //res.render('home', {products: products});
    },
    registerLogin: (req, res) => {
        db.Gender.findAll().then(
            function(genders) {
                res.render('register-login', {genders: genders});
            }
        )
    },
    cart: (req, res) => {
        res.render('shopping-cart');
    }
}

module.exports = controller;