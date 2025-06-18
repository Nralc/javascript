export let cart = [];

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