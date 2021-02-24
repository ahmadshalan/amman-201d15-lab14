/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {


}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  let table1 = document.getElementById('cart-container');
  let text = document.createElement('cart');
  table1.appendChild(text);
  text.textContent= Product.name
  console.log(Product.name);


  // TODO: Iterate over the items in the cart
  for(let i= 0 ; i<Product.allProducts.length ; i++){

    let tr=document.createElement('tr');
    tr.appendChild(table1);
    tr.textContent=Product.allProducts[i];
    console.log(Product.allProducts[i]);


    // let td1 =document.createElement('td');
    // td1.appendChild(tr);
    // td1.textContent= 
    let td2 = document.createElement('td');
    td2.appendChild(tr);
    td2.textContent='x';
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  if (event.target.textContent=== 'x'){

    cart.removeItemFromCart(event.target.textContent)

  }
  // TODO: Save the cart back to local storage

  localStorage.setItem("cart",JSON.stringify(Cart.items));

  // console.log(Cart.items);
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
