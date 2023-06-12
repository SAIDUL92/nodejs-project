// const path = require("path");
// const rootDir = require("../utils/path");
// const Product = require("../models/product");
const Product = require("../models/product_from_local_json_file");
// const Product = require("../models/_productConstructor");

// const products = [];

// Add products
exports.disPlayProductsOnShopPage = (req, res, next) => {
  Product.getProducts((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });



  // Old approach
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
};

// Get products
exports.getProduct = (req, res, next) => {
  Product.getProducts((products) => {
    res.render("add-product", {
      prods: products,
      pageTitle: "add-productsss",
      path: "/admin/add-product",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });


  // Old approach
  // res.sendFile(path.join(rootDire, "views", "add-product.html"));
};

// Post products
exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  // products.push({ title: req.body.title });
  res.redirect("/");
};
