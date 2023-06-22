const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart) {
    this.username = username;
    this.email = email;
    this.cart = cart;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this).then().catch();
  }


  adtoCart(products) {
    const cartProduct = this.cart.items.findindex(product => product._id === products._id);

    const updatedCart = { items: [{ ...products, quantity: 1 }] };

    const db = getDb();

    return db.collection('users').updateOne({ _id: new ObjectId(this._id) }, { $set: { cart: updatedCart } }).then(result => { console.log(result); }).catch(err => { console.log(err); })

  }


  static findById(id) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(id) })
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
