const path = require('path');
const fs = require('fs');

// const products = [];
const filesPath = path.join(path.dirname(require.main.filename), 'data', 'products.json');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {

    fs.readFile(filesPath, (err, content) => {
      let products = []
      if (!err) {
        products = JSON.parse(content)

      }

      products.push(this)

      fs.writeFile(filesPath, JSON.stringify(products), (err) => {
        console.log(err);
      })

    })


    // products.push(this);
  }

  static getProducts(cb) {


    fs.readFile(filesPath, (err, content) => {

      if (err) {
        return cb([])
      }

      cb(JSON.parse(content))

    })

    // return products;
  }
};
