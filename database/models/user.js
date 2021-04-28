const Sequelize = require('sequelize')
const { sequelize } = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'user';
    const cols = {
        user_id: {},
        user_fullname: {},
        user_birthdate: {},
        user_adress: {},
        user_gender_id: {},
        user_email: {},
        user_password: {}
    };
    const config = {
        timestamps: false,
        tableName: users
    }

    const user = sequelize.define(alias, cols, config)

    return user;
}