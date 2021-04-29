let db = require("../database/models")

module.exports = {
    detail: (req, res, next) => {
        res.render('productdetail')
    }
}