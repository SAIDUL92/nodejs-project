const mongodb = require("mongodb")
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;

  }

  save() {
    const db = getDb();

    let databaseoption;
    if (this._id) {
      databaseoption = db.collection('products').updateOne({ _id: this._id }, { $set: this })

    }

    else {

      databaseoption = db.collection('products')
        .insertOne(this)
        .then(result => {

        })
        .catch(err => {

        });
    }

    return databaseoption
      .then(result => {

      })
      .catch(err => {

      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        return products;
      })
      .catch(err => {

      });
  }


  static findById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(products => {
        return products;
      })
      .catch(err => {

      });
  }


  static getProducts() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        return products;
      })
      .catch(err => {

      });
  }

  static deleteByid(productId) {

    const db = getDb();
    return db.collection('products').deleteOne({ _id: new mongodb.ObjectId(productId) }).then(result => { console.log(result); }).catch(result => { console.log(result); })
  }

}





module.exports = Product;
