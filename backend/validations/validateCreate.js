const { check } = require("express-validator");

const validateCreate = [
    check("user_fullname")
        .notEmpty()
        .withMessage("Debes ingresar tu nombre y apellido"),
    check("user_email").isEmail().withMessage("Debes ingresar un e-mail valido")
        .notEmpty()
        .withMessage("Debes ingresar un e-mail"),
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