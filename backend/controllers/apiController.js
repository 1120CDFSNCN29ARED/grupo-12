let db = require("../database/models")

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

    usersList: (req, res) => {
        db.User.findAll({attributes:['user_fullname']}).then(
            (users) => {
                res.status(200).json({
                    total: users.length,
                    results: users,
                    status: 200
                });
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