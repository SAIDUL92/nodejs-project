// const Product = require('../models/product');
const Product = require("../models/product_from_local_json_file");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;

  Product.findByid(productId, (product) => {
    console.log(product);

    res.render("shop/product-detail", {
      pageTitle: product.title,
      path: "/products",
      product:product
    });
  });

  // Product.fetchAll(product => {
  //   res.render('shop/product-list', {
  //     prods: product,
  //     pageTitle: 'All Products',
  //     path: '/products'
  //   });
  // });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
