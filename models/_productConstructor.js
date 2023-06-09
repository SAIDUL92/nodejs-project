const products = [];

module.exports = function Product(title) {
  this.title = title;
  this.save = function () {
    products.push(this);
  };

  this.getProducts = function () {
    return products;
  };
};
