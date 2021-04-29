const Sequelize = require('sequelize')
const sequelize = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
    const cols = {
        product_id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        product_name: {
            allowNull: false,
            type: dataTypes.STRING
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
            type: dataTypes.STRING
        },

        product_image: {
            allowNull: false,
            type: dataTypes.STRING
        },

        gender_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        },

        category_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        }

    };

    const config = {
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: "product_category",
            foreignKey: "category_id",
        })
    };

    Product.associate = (models) => {
        Product.belongsTo(models.Gender, {
            as: "product_gender",
            foreignKey: "gender_id",
        })
    };

    return Product;
}