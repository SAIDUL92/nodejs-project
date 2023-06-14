const path = require("path");
const fs = require("fs");
const { log } = require("console");

const filesPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(filesPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductsFromFile((products) => {

      if (this.id) {

        const existingProductIndex = products.findIndex(product => product.id === this.id);

        const updatedProducts = [...products];

        updatedProducts[existingProductIndex] = this;

        fs.writeFile(filesPath, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });

      }

      else {

        this.id = Math.random().toString();

        products.push(this);

        fs.writeFile(filesPath, JSON.stringify(products), (err) => {

          console.log(err);

        });

      }

    });

  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static getProducts(cb) {
    getProductsFromFile(cb);
  }

  static findByid(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }

  static deleteProductById(id, cb) {
    getProductsFromFile((products) => {
      const updatedProduct = products.filter((p) => p.id !== id);

      console.log(updatedProduct);
      
      fs.writeFile(filesPath, JSON.stringify(updatedProduct), (err) => {

       if(!err){


       }

      });

    });
  }


};
