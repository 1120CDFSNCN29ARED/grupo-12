let db = require("../database/models")

module.exports = {
    detail: (req, res, next) => {
        db.Product.findAll().then(
            function(products) {
                res.render('productdetail', {products: products, req: req});
            }
        )
    }
}