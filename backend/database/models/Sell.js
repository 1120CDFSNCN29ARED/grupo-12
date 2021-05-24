const Sequelize = require('sequelize')
const sequelize = require('.')

module.exports = (sequelize, dataTypes) => {
    const alias = 'Sell';
    const cols = {
        buyer_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        },

        products_id: {
            type: dataTypes.STRING(50),
            foreignKey: true,
        }
    };

    const config = {
        tablename: 'sells',
        timestamps: false
    }

    const Sell = sequelize.define(alias, cols, config);

    Sell.associate = (models) => {
        Sell.belongsTo(models.User, {
            as: "buyer",
            foreignKey: "buyer_id",
        })
        Sell.belongsTo(models.Product, {
            as: "products",
            foreignKey: "products_id",
        })
    };

    return Sell;
}