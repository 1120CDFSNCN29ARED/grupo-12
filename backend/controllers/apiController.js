const db = require("../database/models");
const fs = require("fs");
const path = require("path");
const imageFilePath = path.join(__dirname, "../public/img/");

const controller = {
  productsList: (req, res) => {
    db.Product.findAll().then((products) => {
      db.Category.findAll().then((categories) => {
        const counterByCategory = () => {
          const categoryCount = {};
          for (category in categories) {
            categoryCount[`${categories[category].category_name}`] = 0;
            products.forEach((product) => {
              if (product.product_category_id - 1 == category) {
                categoryCount[`${categories[category].category_name}`] += 1;
              }
            });
          }
          return categoryCount;
        };

        res.status(200).json({
          total: products.length,
          countByCategory: counterByCategory(),
          results: products,
          status: 200,
        });
      });
    });
  },

  productImage: (req, res) => {
    db.Product.findByPk(req.params.id, { attributes: ["product_image"] }).then(
      (productImage) => {
        let image = fs.readFileSync(
          imageFilePath + productImage.dataValues.product_image
        );
        res.status(200).send(image);
      }
    );
  },

  usersList: (req, res) => {
    db.User.findAll({ attributes: ["user_fullname", "id" , "user_email"] }).then((users) => {
      res.status(200).json({
        total: users.length,
        results: users,
        status: 200,
      });
    });
  },

  userImage: (req, res) => {
    db.User.findByPk(req.params.id, { attributes: ["user_profileimage"] }).then(
      (userImage) => {
        let image = fs.readFileSync(
          imageFilePath + userImage.dataValues.user_profileimage
        );
        res.status(200).send(image);
      }
    );
  },

  userDetail: (req, res) => {
    db.User.findByPk(req.params.id, {
      attributes: [
        "user_fullname",
        "user_birthdate",
        "user_gender_id",
        "user_email",
      ],
    }).then((userInfo) => {
      res.status(200).json({
        result: userInfo,
        status: 200,
      });
    });
  },

  productDetail: (req, res) => {
    db.Product.findByPk(req.params.id).then(async (product) => {
      const result = {
        id: product.id,
        name: product.product_name,
        discount: product.product_discount,
        description: product.product_description,
        image: `http://localhost:3001/api/product-image/${product.id}`,
        gender: product.product_gender_id,
        category: product.product_category_id,
      };
      res.status(200).json(result);
    });
  },

  categoriesList: (req, res) => {
    db.Category.findAll().then((categories) => {
      res.status(200).json({
        total: categories.length,
        results: categories,
        status: 200,
      });
    });
  },

  sellsList: (req, res) => {
    db.Sell.findAll().then((sells) => {
      res.status(200).json({
        total: sells.length,
        results: sells,
        status: 200,
      });
    });
  },
};

module.exports = controller;
