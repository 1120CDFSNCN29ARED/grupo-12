const Sequelize = require('sequelize')
const sequelize = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
    const cols = {
        product_name: {
            allowNull: false,
            type: dataTypes.STRING(50)
        },

        product_price: {
            allowNull: false,
            type: dataTypes.INTEGER
        },

        product_discount: {
            type: dataTypes.INTEGER
        },

        product_description: {
            allowNull: false,
            type: dataTypes.STRING(200)
        },

        product_image: {
            allowNull: false,
            type: dataTypes.STRING(500)
        },

        product_gender_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        },

        product_category_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        }
    };

    const config = {
        tablename: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: "product_category",
            foreignKey: "product_category_id",
        })
        Product.belongsTo(models.Gender, {
            as: "product_gender",
            foreignKey: "product_gender_id",
        })
    };

    return Product;
}