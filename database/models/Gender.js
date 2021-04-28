const Sequelize = require('sequelize')
const { sequelize } = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'Gender';
    const cols = {
        id_gender: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        gender_name: {
            allowNull: false,
            type: dataTypes.STRING
        }
    };

    const config = {
        timestamps: false
    }

    const Gender = sequelize.define(alias, cols, config);

    Gender.associate = (models) => {
        Gender.hasMany(models.User, {
            as: "users",
            foreignKey: "id_gender",
        })
    }

    return Gender;
}