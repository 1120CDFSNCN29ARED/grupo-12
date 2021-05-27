const db = require("../database/models");
const fs = require("fs")
const path = require("path")
let imageFilePath = path.join(__dirname, '../public/img/');

const controller = {
    productsList: (req, res) => {
        db.Product.findAll().then(
            (products) => {
                res.status(200).json({
                    total: products.length,
                    results: products,
                    status: 200
                });
            }
        )
    },

    productImage: (req, res) => {
        db.Product.findByPk(req.params.id, {attributes: ['product_image']}).then(
            (productImage) => {
                let image = fs.readFileSync(imageFilePath + productImage.dataValues.product_image)
                res.status(200).send(image);
            }
        )
    },

    usersList: (req, res) => {
        db.User.findAll({attributes:['user_fullname', 'id']}).then(
            (users) => {
                res.status(200).json({
                    total: users.length,
                    results: users,
                    status: 200
                });
            }
        )
    },

    userImage: (req, res) => {
      
        db.User.findByPk(req.params.id, {attributes: ['user_profileimage']}).then(
            (userImage) => {
                let image = fs.readFileSync(imageFilePath + userImage.dataValues.user_profileimage)
                res.status(200).send(image);
            }
        )  
    },

    categoriesList: (req, res) => {
        db.Category.findAll().then(
            (categories) => {
                res.status(200).json({
                    total: categories.length,
                    results: categories,
                    status: 200
                });
            }
        )
    },

    sellsList: (req, res) => {
        db.Sell.findAll().then(
            (sells) => {
                res.status(200).json({
                    total: sells.length,
                    results: sells,
                    status: 200
                })
            }
        )
    }
};

module.exports = controller;