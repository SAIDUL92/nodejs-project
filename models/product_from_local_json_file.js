const path = require('path');
const fs = require('fs')
const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    const filesPath = path.join(path.dirname(require.main.filename), 'data', 'products.json');
    fs.readFile(filesPath, (content) => {

      console.log(content)
    })
    products.push(this);
  }

  static getProducts() {
    return products;
  }
};
