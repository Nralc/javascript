var cartQuantity = 0;
var addtocartButt = document.body.querySelector('.addtoCart');
var addTwo = document.body.querySelector('.addtwo');
var addThree = document.body.querySelector('.addthree');
var reset = document.body.querySelector('.reset');

function showQuant(){
    console.log(`Cart Quantity: ${cartQuantity}`);
}

function addtoCart(){
    cartQuantity += 1;
    showQuant();
}

addtocartButt.addEventListener("click", addtoCart);
addTwo.addEventListener("click", function addtwo(){
    cartQuantity += 2;
    showQuant();
});

addThree.addEventListener("click", function addthree(){
    cartQuantity += 3;
    showQuant();
});
reset.addEventListener("click", function resetcart(){
    cartQuantity = 0;
    showQuant();
});

