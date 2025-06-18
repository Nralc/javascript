export let cart = [{
    productsId: "001",
    productQty: 2
},

{
    productsId: "003",
    productQty: 2
}

];

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

}

export function deleteCartItem(id){
    let newCart = [];
    cart.forEach((item) =>{
        if(item.productsId !== id){
            newCart.push(item);
        }
    })

    cart = newCart;
}