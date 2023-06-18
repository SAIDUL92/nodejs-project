const getDb = require('../utils/database').getDb

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    console.log(this);
    const db = getDb();
    return db.collection('products').insertOne(this).then(result => {
      console.log(result);
    }).catch(
      (err) => {
        console.log(err);
      }
    )

  }

  // static fetchAll(cb) {
  //   // getProductsFromFile(cb);
  // }

};














// const path = require("path");
// const fs = require("fs");
// const Cart = require("../models/cart");
// const filesPath = path.join(
//   path.dirname(require.main.filename),
//   "data",
//   "products.json"
// );



// const getProductsFromFile = (cb) => {
//   fs.readFile(filesPath, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(id, title, imageUrl, price, description) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.price = price;
//     this.description = description;
//   }

//   save() {
//     getProductsFromFile((products) => {
//       if (this.id) {
//         const existingProductIndex = products.findIndex(
//           (product) => product.id === this.id
//         );

//         const updatedProducts = [...products];

//         updatedProducts[existingProductIndex] = this;

//         fs.writeFile(filesPath, JSON.stringify(updatedProducts), (err) => {});
//       } else {
//         this.id = Math.random().toString();
//         products.push(this);
//         fs.writeFile(filesPath, JSON.stringify(products), (err) => {});
//       }
//     });
//   }

//   static fetchAll(cb) {
//     getProductsFromFile(cb);
//   }

//   static getProducts(cb) {
//     getProductsFromFile(cb);
//   }

//   static findByid(id, cb) {
//     getProductsFromFile((products) => {
//       const product = products.find((p) => p.id === id);
//       cb(product);
//     });
//   }

//   static deleteById(id) {
//     getProductsFromFile((products) => {
//       const product = products.filter((product) => product.id === id);
//       const updatedProducts = products.filter((p) => p.id !== id);
//       fs.writeFile(filesPath, JSON.stringify(updatedProducts), (err) => {
//         if (!err) {
//           Cart.deleteProduct(id, product.map((item)=>{
//             return item.price
//           }));
//         }
//       });
//     });
//   }
// };
