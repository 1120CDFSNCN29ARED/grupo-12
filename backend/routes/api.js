var express = require("express");
var router = express.Router();
const multer = require("multer");
const path = require("path");

const controller = require("../controllers/apiController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = path.join(__dirname, "../public/img");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    let imageName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});

const upload = multer({ storage });

router.get("/products-list", controller.productsList);

router.get("/product-image/:id", controller.productImage);
router.get("/user-image/:id", controller.userImage);
router.get("/user-image-encripted/:id", controller.userImageEncripted);

router.get("/user-detail/:id", controller.userDetail);
router.get("/product-detail/:id", controller.productDetail);

router.get("/users-list", controller.usersList);
router.get("/categories-list", controller.categoriesList);
router.get("/sells-list", controller.sellsList);


module.exports = router;
