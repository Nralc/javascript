import {cart, deleteCartItem} from '/data/cart.js'
import {products} from '/data/products.js'

let cartSummaryHTML = '';

cart.forEach((item) => {
    let cartItemId = item.productsId;
    let matchingItem;

    products.forEach((item) =>{
        if(item.productId === cartItemId){
            matchingItem = item;
        }
    })

    cartSummaryHTML += 
    `<div class="cart-item-container-${matchingItem.productId}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.productImage}">

              <div class="cart-item-details">
                <div class="product-name">
                 ${matchingItem.productName}
                </div>
                <div class="product-price">
                  $${matchingItem.productPrice * item.productQty}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.productQty}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary" data-item-id="${matchingItem.productId}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.productId}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.productId}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.productId}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
})

document.querySelector('.order-summary').innerHTML = cartSummaryHTML;
document.querySelectorAll('.delete-quantity-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            let deleteItemId = link.dataset.itemId;
            deleteCartItem(deleteItemId);
            document.querySelector(`.cart-item-container-${deleteItemId}`).remove();
        })
    });



