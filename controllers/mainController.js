const fs = require('fs');
const path = require('path')

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const db = path.join(__dirname, '../database/models/index.js');

const controller = {
    home: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render('home', {products: products});
    },
    registerLogin: (req, res) => {
        res.render('register-login');
    },
    cart: (req, res) => {
        res.render('shopping-cart');
    }
}

module.exports = controller;