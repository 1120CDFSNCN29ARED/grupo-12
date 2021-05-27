const { check } = require("express-validator");
const db = require("../database/models/index")

const validateCreate = [
    check("user_fullname")
        .notEmpty()
        .withMessage("Debes ingresar tu nombre y apellido"),
    check("user_email")
        .isEmail()
        .withMessage("Debes ingresar un e-mail valido")
        .notEmpty()
        .withMessage("Debes ingresar un e-mail")
        .custom((value, { req }) => {
            return new Promise((resolve, reject) => {
                db.User.findOne({where:{user_email: req.body.user_email}}).then( (match, res) => {
                    if (match) {
                        console.log('---------------------------MATCH--------------------------')
                        reject(new Error('Este email ya está vinculado a un usuario'))
                    }
                   resolve(true)
                });
            });
        }),
    check("user_birthdate")
        .notEmpty()
        .withMessage("debes ingresar tu fecha de nacimiento"),
    check("user_adress")
        .notEmpty()
        .withMessage("Debes ingresar tu dirección"),
    check("user_gender_id")
        .isInt()
        .withMessage("Debes seleccionar tu genero"),
    check("user_password")
        .notEmpty()
        .withMessage("Debes ingresar una contraseña")
];

module.exports = validateCreate;