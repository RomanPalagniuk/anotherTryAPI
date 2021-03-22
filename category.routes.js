const router = require("express").Router();
const {
  CreateCategory,
  GetAllCategories,
  GetOneCategory,
} = require("./category.controller");

router.get("/api/v1/categories", GetAllCategories);

router.get("/api/v1/categories/:category_id", GetOneCategory);

router.post("/api/v1/categories/", CreateCategory);

module.exports = router;
