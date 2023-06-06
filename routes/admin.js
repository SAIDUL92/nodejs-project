const path = require("path");

const rootDire = require("../utils/path");
const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDire, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);

  products.push({ name: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
