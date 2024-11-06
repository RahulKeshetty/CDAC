function sum(...nums) {
    let res = 0;
    nums.forEach((i) => {
        res+=i;
    });
    return res;
}

var res = sum(4,6,10,15.20,34,50);
console.log(res);