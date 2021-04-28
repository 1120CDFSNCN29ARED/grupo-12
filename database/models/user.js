const Sequelize = require('sequelize')
const { sequelize } = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        user_id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_fullname: {
            allowNull: false,
            type: dataTypes.STRING
        },
        user_birthdate: {
            type: dataTypes.DATE
        },
        user_adress: {
            type: dataTypes.STRING
        },
        user_gender_id: {
            type: dataTypes.INTEGER
        },
        user_email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_password: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    const config = {
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {
        User.belongsTo(models.Gender, {
            as: "genders",
            foreignKey: "user_gender_id",
        })
    }
    
    return User;
}