const Sequelize = require('sequelize')
const sequelize = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'Category';
    const cols = {
        id_category: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        category_name: {
            allowNull: false,
            type: dataTypes.STRING
        }
    };

    const config = {
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id",
        })
    }

    return Category;
}