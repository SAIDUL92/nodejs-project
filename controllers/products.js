// const path = require("path");
// const rootDir = require("../utils/path");

const products = [];

// Add products
exports.disPlayProductsOnShopPage = (req, res, next) => {
    res.render('shop',{
      prods:products,
      pageTitle:'shop',
      path:'/',
      hasProducts:products.length>0,
      activeShop:true,
      productCSS:true
  
  
    })

    // Old approach
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
  }


// Get products
  exports.getProduct = (req, res, next) => {
    res.render('add-product',{
      prods:products,
      pageTitle:'add-productsss',
      path:'/admin/add-product',
      hasProducts:products.length>0,
      activeShop:true,
      productCSS:true
    });

     // Old approach
    // res.sendFile(path.join(rootDire, "views", "add-product.html"));
  }

// Post products
  exports.postProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/");
  }