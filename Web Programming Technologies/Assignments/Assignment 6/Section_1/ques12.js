const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    },3000)
})

prom.then(() => {
    console.log("Done!!");
    
})