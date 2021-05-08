let db = require("../database/models")

module.exports = {
    detail: (req, res, next) => {
        db.Product.findByPk(req.params.id).then(
            function(product) {
                res.render('productdetail', {product: product, req: req});
            }
        )
    },

    list: (req, res) => {
        db.Product.findAll().then(
            function(products) {
                res.render('product-list', {products: products});
            }
        )
    }
}