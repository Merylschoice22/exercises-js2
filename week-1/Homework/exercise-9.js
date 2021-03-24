/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 1
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
  selectedProducts: [],
  productQuantity: function(id) {
    let productByID = this.selectedProducts.filter(sp => sp.id === id);
    return productByID.length;
  }
  };

/*** I CREATED THIS TO GET PRODUCT QUANTITY ****/
/* function countProductQuantity(id){
  let productByID = shoppingCart.selectedProducts.filter(p => p.id === id);
  return productByID.length;
} */

/* 3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice
 */

/* function addToShoppingCart(id){
  products.forEach(p => {
    if (p.id === id && p.stock > 0) {
      shoppingCart.selectedProducts.push(p);
      shoppingCart.totalPrice += p.price;
      p.stock -= 1;
      console.log(`${p.name} has successfully been added to your cart!`)
    } else if (p.id === id && p.stock < 0) {
      console.log(`There is not enough of ${p.name} in stock.`);
    } 
  
  })
} */

/* FIND */

function addToShoppingCart(id){
  /* products.find(p => {
    if (p.id === id && p.stock > 0) {
      shoppingCart.selectedProducts.push(p);
      shoppingCart.totalPrice += p.price;
      p.stock -= 1;
      console.log(`${p.name} has successfully been added to your cart!`)
    } else if (p.id === id && p.stock < 0) {
      console.log(`There is not enough of ${p.name} in stock.`);
    } 
  }) */

  let myProduct = products.find (p => p.id === id)  
  if (myProduct.stock <= 0) {
    // console.log(`There is not enough of ${myProduct.name} in stock.`);
    return `There is not enough of ${myProduct.name} in stock.`
  } else if (myProduct.stock > 0) {
    shoppingCart.selectedProducts.push(myProduct);
    shoppingCart.totalPrice += myProduct.price;
    myProduct.stock -= 1;
    // console.log(`${myProduct.name} has successfully been added to your cart!`)
    return `${myProduct.name} has successfully been added to your cart!`
  }
}

console.log(addToShoppingCart(2))




/* 4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore
 */

function removeFromShoppingCart(id){
  // let productToRemove = products.find(p => p.id === id)
  shoppingCart.selectedProducts = shoppingCart.selectedProducts.filter(p => p.id !== id)
  }

/*
5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products
*/

function shop(){
  
  shoppingCart.selectedProducts.forEach(sp => {
    products.forEach( p => {
      p.id === sp.id ? p.stock-- : ''
      // p.id === sp.id ? p.stock = p.stock - 1 : ''
    })
  })
  
  shoppingCart.selectedProducts = [];
  shoppingCart.totalPrice = 0;
}

/*
6. If there is not enough stock, the product cannot be added to the shopping cart
*/
// products.forEach(p => {
//  p.stock < shoppingCart.productQuantity(p.id) ? console.log(`There is not enough of ${p.name} in stock.`) : ''
// }) 

//results
// addToShoppingCart(1);
// console.log("Step 1");
// console.log("Total Price = " + shoppingCart.totalPrice);
// console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
// console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
// addToShoppingCart(2);
// console.log("Step 2");
// console.log("Total Price = " + shoppingCart.totalPrice);
// console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
// console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
// addToShoppingCart(4);
// console.log("Step 3");
// console.log("Total Price = " + shoppingCart.totalPrice);
// console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
// console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
// removeFromShoppingCart(2);
// console.log("Step 4");
// console.log("Total Price = " + shoppingCart.totalPrice);
// console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
// console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
// shop();
// console.log("Step 5");
// console.log("Total Price = " + shoppingCart.totalPrice);
// console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
// console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));