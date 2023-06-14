const fs = require('fs')
const path = require('path')

const filesPath = path.join(path.dirname(require.main.filename), "data", "cart.json"
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // fetch the previuos cart
        fs.readFile(filesPath, (err, content) => {

            let cart = { products: [], totalPrice: 0 }

            if (!err) {

                cart = JSON.parse(content)

                // console.log("Product from Cart Model",JSON.parse(content));
            }


            // analyz the cart => find existing product

            const existingProductindex = cart.products.findIndex(prod => prod.id === id);

            const existingProduct = cart.products[existingProductindex];

            let updatedProduct;

            // add new product / increase 

            if (existingProduct) {
                updatedProduct = { ...existingProduct };

                updatedProduct.qty = updatedProduct.qty + 1;

                cart.products = [...cart.products];

                cart.products[existingProductindex] = updatedProduct
            }

            else {
                updatedProduct = { id: id, qty: 1 }
                cart.products = [...cart.products, updatedProduct]
            }

            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(filesPath, JSON.stringify(cart), err => { })
        })


    }
}