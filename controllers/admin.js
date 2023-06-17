const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/edit-product",
    editing: false,
    product: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);
  product.save().then(result => {
    console.log(result);
    res.redirect("/");
  }).catch(err => {
    console.log(err);
  });

};



// exports.getProducts = (req, res, next) => {
//   Product.fetchAll((products) => {
//     res.render("admin/products", {
//       prods: products,
//       pageTitle: "Admin Products",
//       path: "/admin/products",
//     });
//   });
// };

// exports.getEditProduct = (req, res, next) => {
//   const editingMode = req.query.edit;
//   if (!editingMode) {
//     return res.redirect("/");
//   }

//   const productId = req.params.productId;
//   Product.findByid(productId, (product) => {
//     res.render("admin/edit-product", {
//       pageTitle: "Edit Product",
//       path: "/admin/edit-product",
//       editing: true,
//       product: product,
//     });
//   });
// };

// exports.postEditProduct = (req, res, next) => {
//   const productId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedPrice = req.body.price;
//   const updatedDescription = req.body.description;
//   const updatedProduct = new Product(
//     productId,
//     updatedTitle,
//     updatedImageUrl,
//     updatedPrice,
//     updatedDescription
//   );
//   updatedProduct.save();
//   res.redirect("/products");
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const productId = req.body.productId;
//   Product.deleteById(productId);
//   res.redirect("/admin/products");
// };
