let shoppingCart = [];

const taxRate = 5.4;

let totPrice = 0;

function addItem(i) {
    shoppingCart.push(i);
}

function removeItem(item) {
    shoppingCart =  shoppingCart.filter((i) => {
        i.description !== item;
    })
}

function calcTotalPrice() {
    shoppingCart.forEach((item) => {
        totPrice += item.price * taxRate;
    });
    return totPrice;
}

function displayCart() {
    console.log(shoppingCart);
}


addItem({
    description: 'laptop',
    price: '70,000'
})
addItem({
    description: 'Phone',
    price: '45,000'
})
addItem({
    description: 'Earphones',
    price: '3,000'
})
displayCart();
removeItem('Earphones');
displayCart();
