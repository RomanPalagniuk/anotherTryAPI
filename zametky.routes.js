const router = require("express").Router();
const {
  GetAllZametky,
  GetOneZametka,
  CreateZametka,
  UpdateZametka,
  DeleteZametka,
} = require("./zametky.controller");

router.get("/api/v1/zametky", GetAllZametky);

router.get("/api/v1/zametky/:id", GetOneZametka);

router.post("/api/v1/zametky/", CreateZametka);

router.put("/api/v1/zametky/:id", UpdateZametka);

router.delete("/api/v1/zametky/:id", DeleteZametka);

module.exports = router;
