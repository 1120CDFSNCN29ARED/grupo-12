const Sequelize = require('sequelize')
const sequelize = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'Category';
    const cols = {
        category_name: {
            allowNull: false,
            type: dataTypes.STRING(45)
        }
    };

    const config = {
        tabelName: 'categories',
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "id",
        })
    }

    return Category;
}