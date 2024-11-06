function acc(callback) {
    setTimeout(() => {
        callback();
        
    },3000)
}

acc(() => {
    console.log("Hello World!");
})