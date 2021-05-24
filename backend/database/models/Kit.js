const Sequelize = require('sequelize')
const sequelize = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'Kit';
    const cols = {
        kit_name: {
            allowNull: false,
            type: dataTypes.STRING(50)
        },

        category_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        },

        product1: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },

        product2: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },

        product3: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },

        product4: {
            type: dataTypes.INTEGER,
            foreignKey: true
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
            foreignKey: "category_id",
        })
        Product.belongsTo(models.Gender, {
            as: "product_gender",
            foreignKey: "gender_id",
        })
    };

    return Product;
}