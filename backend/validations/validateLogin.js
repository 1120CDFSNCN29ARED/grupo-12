const { check } = require("express-validator");
const db = require("../database/models/index")
const bcrypt = require("bcrypt")

const validateLogin = [
  check("email")
    .notEmpty()
    .withMessage("Debes ingresar tu email")
    .isEmail()
    .withMessage("Debes ingresar un email valido")
    .custom((value, { req }) => {
      return new Promise((resolve, reject) => {
        db.User.findOne({ where: { user_email: req.body.email } }).then((match) => {
          if (!match) {
            console.log('---------------------------NO MATCH--------------------------')
            reject(new Error('Este email no está vinculado a un usuario'))
          }
          resolve(true)
        });
      });
    }),
  check("user_password_login")
    .notEmpty()
    .withMessage("Debes completar con tu contraseña")
    .custom((value, { req }) => {
      return new Promise((resolve, reject) => {
        db.User.findOne({ where: { user_email: req.body.email } }).then((match) => {
          if (match) {
            if(bcrypt.compareSync(req.body.user_password_login, match.user_password)){
              resolve(true)
            }else{
              reject(new Error('Contraseña incorrecta'))
            }
          }
        });
      });
    }),
];

module.exports = validateLogin;