function compute(arr) {
    var fil =  arr.filter((n) => {
        return n%2 === 0
    })

    var map = fil.map((n) => {
        return n*2;
    })

    return map.reduce((acc,curr) => {
        return acc+curr;
    })
}

var res = compute([5,7,10,12,15,17,21,22,25,30]);
console.log(res);