export let cart = JSON.parse(localStorage.getItem('cart')); 

if(!cart){
    cart = [{
    productsId: "001",
    productQty: 2
},

{
    productsId: "003",
    productQty: 2
}

];

}

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;

    cart.forEach((item) =>{
        if(item.productsId === productId){
            matchingItem = item;
        } 
    });

    if(matchingItem){
        matchingItem.productQty += 1;
    } else {
        cart.push({
            productsId: productId,
            productQty: 1
        });
    }

    saveToStorage();

}

export function deleteCartItem(id){
    let newCart = [];
    cart.forEach((item) =>{
        if(item.productsId !== id){
            newCart.push(item);
        }
    })

    cart = newCart;
    saveToStorage();
}