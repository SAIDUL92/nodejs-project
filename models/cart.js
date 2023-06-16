const fs = require("fs");
const path = require("path");

const filesPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // fetch the previuos cart
    fs.readFile(filesPath, (err, content) => {
      let cart = { products: [], totalPrice: 0 };

      if (!err) {
        cart = JSON.parse(content);

        // console.log("Product from Cart Model",JSON.parse(content));
      }

      // analyz the cart => find existing product

      const existingProductindex = cart.products.findIndex(
        (prod) => prod.id === id
      );

      const existingProduct = cart.products[existingProductindex];

      let updatedProduct;

      // add new product / increase

      if (existingProduct) {
        updatedProduct = { ...existingProduct };

        updatedProduct.qty = updatedProduct.qty + 1;

        cart.products = [...cart.products];

        cart.products[existingProductindex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(filesPath, JSON.stringify(cart), (err) => {});
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(filesPath, (err, content) => {
      if (err) {
        return;
      }

      const updatedCart = { ...JSON.parse(content) };

      const product = updatedCart.products.find((prod) => prod.id === id);

      if (!product) {
        return;
      }

      const productQty = product.qty;

      updatedCart.products = updatedCart.products.filter(
        (prod) => prod.id !== id
      );

      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(filesPath, JSON.stringify(updatedCart), (err) => {});
    });
  }

  static getCart(cb) {
    fs.readFile(filesPath, (err, content) => {
      const cart = { ...JSON.parse(content) };
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
      // fs.writeFile(filesPath, JSON.stringify(updatedCart), (err) => {});
    });
  }
};
