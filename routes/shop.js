const path = require("path");
const rootDir = require("../utils/path");
const express = require("express");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
