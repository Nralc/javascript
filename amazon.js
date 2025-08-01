import {products} from '/data/products.js'
import {cart, addToCart} from '/data/cart.js'

var productsHTML = '';
products.forEach((product) => {
    productsHTML += ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.productImage}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.productName}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.productRating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.productRating.count}
            </div>
          </div>

          <div class="product-price">
            $${product.productPrice}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-item-id="${product.productId}">
            Add to Cart
          </button>
        </div>`;
});


function updateCartQty(){
    let cartQuantity = 0;

    cart.forEach((item) => {
        cartQuantity += item.productQty;
    })

    document.querySelector('.js-cart-qty').innerHTML = cartQuantity;

    console.log(cart);
    console.log(cartQuantity);
}


document.querySelector('.products-grid').innerHTML = productsHTML;
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', ()=>{
        const productId = button.dataset.itemId;
        addToCart(productId);
        updateCartQty();
    });

});