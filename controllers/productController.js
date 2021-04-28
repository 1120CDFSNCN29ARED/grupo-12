let db = require("../database/models")

module.exports = {
    detail: (req, res, next) => {
        db.User.findAll()
        .then(() => {
            console.log(User)
        })

        res.render('productdetail')
    }
}