const bcrypt = require('bcrypt')
const db = require('../database/models/index.js');
const { validationResult } = require("express-validator");

const controller = {
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
    },

    editUser: (req, res) => {
        let userRequest = db.User.findByPk(req.params.id)
        let genderRequest = db.Gender.findAll();

        Promise.all([userRequest, genderRequest])
            .then(([user, genders]) => {
                res.render('edit-user', { user: user, genders: genders, req: req })
            })
    },

    updateUser: (req, res) => {
        db.User.update({
            user_fullname: req.body.user_fullname,
            user_email: req.body.user_email,
            user_profileimage: req.file.filename,
            user_birthdate: req.body.user_birthdate,
            user_adress: req.body.user_adress,
            user_gender_id: req.body.user_gender_id,
        }, {
            where: {
                id: req.params.id
            }
        }).then(
            res.redirect('/')
        )


    },

    deleteUser: (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(
            res.redirect('/control-panel')
        )
    },
}

module.exports = controller;