const path = require('path')
var cookieParser = require('cookie-parser')

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const dbJSON = path.join(__dirname, '../database/models/index.js');

const db = require('../database/models/index.js');

const controller = {
    test: (req, res) => {
        
        res.send('hola');
    },

    buyNow: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let cart = req.cookies.shoppingCart
                if(!cart){
                    res.cookie('shoppingCart' , product.id, {expire : new Date() + 10})
                    res.redirect('/shopping-cart')
                }else{
                    res.cookie('shoppingCart' ,cart +'-'+ product.id)
                    res.redirect('/shopping-cart')
                }
            }) 
    },

    create: (req, res) => {
        db.Product.create(req.body)
            .then(product => {
                return res.status(200).json({
                    data:product,
                    status: 200,
                    created: 'ok'
                }
                )
            }) 
    },

    delete: (req, res) => {
        db.Product.destroy(req.body)
        .then(product => {
                return res.status(200).json({
                    data:product,
                    status: 200,
                    created: 'ok'
                }
                )
        })
    }
}

module.exports = controller;