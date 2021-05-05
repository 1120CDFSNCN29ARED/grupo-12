const Sequelize = require('sequelize')
const sequelize = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
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
            type: dataTypes.INTEGER,
            foreignKey: true,
        },
        user_email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_password: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }

    const config = {
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {
        User.belongsTo(models.Gender, {
            as: "user_gender",
            foreignKey: "user_gender_id",
        })
    };

    return User;
}