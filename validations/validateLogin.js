const { check } = require("express-validator");
const db = require("../database/models/index")

const validateLogin = [
  check("email")
    .notEmpty()
    .withMessage("Debes ingresar tu email")
    .isEmail()
    .withMessage("Debes ingresar un email valido"),
  check("user_password").notEmpty().withMessage("Debes completar con tu contraseña"),
];

/*.custom(async() => {
      const comparacion = await db.User.findOne({ user_email : email })            
    }).withMessage("probando custom")*/
 

module.exports = validateLogin;




