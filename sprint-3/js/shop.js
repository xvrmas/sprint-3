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
  constructor(name, price, type, quantity, subtotal, subtotalWithDiscount) {
    this._name = name;
    this._price = price;
    this._type = type;
    this._quantity = quantity;
    this._subtotal = subtotal;
    this._subtotalWithDiscount = subtotalWithDiscount;
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
  } get subtotalWithDiscount() {
    return this._subtotalWithDiscount;
  }

}


var cart = [];
var total = 0;
var countProduct = 0;


// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array


// function buy(id) {
//   let counter = 1;
//   for (let i = 0; i < products.length; i++) {
//     const element = products[i];
//     if (counter == id) {
//       cartList.push(element);
//     }
//     counter++;
//   }
//   console.log(cartList);
//   calculateTotal()
//   generateCart()
// }



// Exercise 2
function cleanCart() {
  for (let value of cartList) {
    cartList.splice(value);
  }
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array
function calculateTotal() {
  for (let i = 0; i < cartList.length; i++) {
    total = total + cartList[i].price;
  }
  console.log(`Total a pagar: ` + total.toFixed(2))
}

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.



// function generateCart() {

//   for (let i = 0; i < cartList.length; i++) {
//     var name = cartList[i].name;
//     var price = cartList[i].price;
//     var type = cartList[i].type;
//     var quantity = 1;
//     var subtotal = cartList[i].price;
//     var subtotalWithDiscount = 0;
//     finalCart = new Cart(name, price, type, quantity, subtotal, subtotalWithDiscount)
//   }
//   let found = false;
//   let i = 0;
//   while (i < cart.length && !found) {
//     if (cart[i].name == finalCart.name) {
//       cart[i]._quantity += 1;
//       cart[i]._subtotal = cart[i].price * cart[i]._quantity;
//       found = true;
//     }
//     i++;
//   }
//   if (!found) {
//     cart.push(finalCart);
//   }
//   countProduct++;
//   applyPromotionsCart()
//   cleanCart();
//   document.getElementById(`count_product`).innerHTML = countProduct;
//   console.log(cart, countProduct);
// }


// Exercise 5
// Apply promotions to each item in the array "cart"
function applyPromotionsCart() {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name == "cooking oil" && cart[i].quantity >= 3) {
      let discount = 10;
      cart[i]._subtotalWithDiscount = discount * cart[i].quantity;
    } else if (cart[i].name == "Instant cupcake mixture" && cart[i].quantity >= 10) {
      discount = cart[i].price / 3 * 2;
      cart[i]._subtotalWithDiscount = discount * cart[i].quantity;
    }
  }
}



// ** Nivell II **

// Exercise 7
// Refactor previous code in order to simplify it
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cart array or update its quantity in case it has been added previously.
function buy(id) {

  let counter = 1;
  let i = 0;
  let foundOne = false;
  while (i < products.length && !foundOne) {
    const element = products[i];
    if (counter == id) {
      cartList.push(element);
      foundOne = true;
    }
    counter++;
    i++;
  }

  for (let j = 0; j < cartList.length; j++) {
    var name = cartList[j].name;
    var price = cartList[j].price;
    var type = cartList[j].type;
    var quantity = 1;
    var subtotal = cartList[j].price;
    var subtotalWithDiscount = 0;
    finalCart = new Cart(name, price, type, quantity, subtotal, subtotalWithDiscount)
  }
  let found = false;
  let k = 0;
  while (k < cart.length && !found) {
    if (cart[k].name == finalCart.name) {
      cart[k]._quantity += 1;
      alert(`${cart[k].name} added to cart succesfully`);
      cart[k]._subtotal = cart[k].price * cart[k]._quantity;
      found = true;
    }
    k++;
  }
  if (!found) {
    cart.push(finalCart);
    alert(`${cart[k].name} added to cart succesfully`)
  }
  countProduct++;
  applyPromotionsCart()
  cleanCart();
  document.getElementById(`count_product`).innerHTML = countProduct;
  console.log(cart, countProduct);
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  let counter = 1;
  let element = ``;
  for (let i = 0; i < products.length; i++) {
    if (counter == id) {
      element = products[i];
    }
    counter++;
  }
  let found = false;
  let j = 0;
  if (cart.length == 0) {
    alert(`This item does not exist in the cart `)
  } else {
    while (j < cart.length && !found) {
      if (element.name == cart[j].name) {
        found = true
      }
      j++;
    }
    j--;

    if (found == true && cart[j].quantity > 1) {
      cart[j]._quantity = cart[j]._quantity - 1;
      alert(`${cart[j].name} removed from cart successfully`);
      countProduct--;


    } else if (cart[j].quantity <= 1) {
      cart.splice(j, 1)
      alert(`all this product removed from cart successfully`);
      countProduct--;

    }
  }
  document.getElementById(`count_product`).innerHTML = countProduct;
  console.log(element.name)
  console.log(cart)
}

// Exercise 9
// Fill the shopping cart modal manipulating the shopping cart dom
function printCart() {
  
}

function open_modal() {
  console.log("Open Modal");
}
