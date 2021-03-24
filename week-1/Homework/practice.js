var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 0
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
var product3 = {
  id: 3,
  name: "Blender",
  price: 25.99,
  stock: 15
};
var product4 = {
  id: 4,
  name: "Knife set",
  price: 19.99,
  stock: 6
};


products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: [product2, product2],
  productQuantity: function(id) {
    let productByID = this.selectedProducts.filter(sp => sp.id === id);
    return productByID.length;
  }
};
// products = [product1, product2, product3, product4]

products.forEach(p => {
    p.stock > shoppingCart.productQuantity(p.id) ? console.log(1) : console.log(0)
});

// console.log(productsQuantity)

// products.forEach(a => console.log(a));

// console.log(shoppingCart.productQuantity(2));
// console.log(shoppingCart.selectedProducts);