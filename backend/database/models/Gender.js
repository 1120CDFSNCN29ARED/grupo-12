const Sequelize = require('sequelize')
const sequelize = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'Gender';
    const cols = {
        gender_name: {
            allowNull: false,
            type: dataTypes.STRING(15)
        }
    };

    const config = {
        tabelName: 'genders',
        timestamps: false
    }

    const Gender = sequelize.define(alias, cols, config);

    Gender.associate = (models) => {
        Gender.hasMany(models.User, {
            as: "users",
            foreignKey: "id",
        })
        Gender.hasMany(models.Product, {
            as: "products",
            foreignKey: "id",
        })
    };

    return Gender;
}