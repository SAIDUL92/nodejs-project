const path = require("path");
const fs = require("fs");

// const products = [];
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
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    this.id = Math.random().toString();

    // fs.readFile(filesPath, (err, content) => {
    //   let products = [];
    //   if (!err) {
    //     products = JSON.parse(content);
    //   }

    //   products.push(this);

    //   fs.writeFile(filesPath, JSON.stringify(products), (err) => {
    //     console.log(err);
    //   });
    // });

    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // products.push(this);
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static getProducts(cb) {
    // fs.readFile(filesPath, (err, content) => {
    //   if (err) {
    //     return cb([]);
    //   }

    //   cb(JSON.parse(content));
    // });
    getProductsFromFile(cb);
    // return products;
  }

  static findByid(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
