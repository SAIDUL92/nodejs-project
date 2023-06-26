const Product = require("../models/product");

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
      isAuthenticated: false,
    });
  });
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
      isAuthenticated: false,
    });
  });
};

// Post products
exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
