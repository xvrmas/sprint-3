// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
class Cart {
  constructor(name, price, type, quantity, subtotal) {
    this._name = name;
    this._price = price;
    this._type = type;
    this._quantity = quantity;
    this._subtotal = subtotal;
  }
  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  } get type() {
    return this._type;
  } get quantity() {
    return this._quantity;
  } get subtotal() {
    return this._subtotal;
  } 
}


var cart = [];

var total = 0;



// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
function buy(id) {
  let counter = 1;
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    if (counter == id) {
      cartList.push(element);
    }
    counter++;
  }
  console.log(cartList);
  calculateTotal()
  generateCart()
}



// Exercise 2
function cleanCart() {
  for (let value of cartList) {
    cartList.splice(value)
  }
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array
function calculateTotal() {
  for (let i = 0; i < cartList.length; i++) {
    total = total + cartList[i].price;
  }
  console.log(total.toFixed(2))
}

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
function generateCart() {

  for (let i = 0; i < cartList.length; i++) {
    var name = cartList[i].name;
    var price = cartList[i].price;
    var type = cartList[i].type;
    var quantity = 1;
    var subtotal = cartList[i].price ;
    finalCart = new Cart(name, price, type, quantity, subtotal)
  }

  let found = false;
  let i = 0;
  while (i < cart.length && !found) {
    if (cart[i].name == finalCart.name) {
      cart[i]._quantity += 1;
      cart[i]._subtotal = cart[i].price * cart[i]._quantity;
      found = true;
    }
    i++;
  }
  if (!found) {
    cart.push(finalCart);
  }

  cleanCart();
  console.log(cart)
}





// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
