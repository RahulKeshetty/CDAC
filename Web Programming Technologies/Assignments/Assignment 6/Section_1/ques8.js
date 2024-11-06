const shoppingCartPrices = [19.99, 5.49, 12.75, 3.99, 45.00, 7.50, 15.89];

const res = shoppingCartPrices.reduce((accu, curr) => {
    return accu + curr;
})

console.log(res);