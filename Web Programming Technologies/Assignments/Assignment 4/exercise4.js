function fetchData(url,callback) {
    if (url==='') {
        callback('Error');
    }
    else{
        setTimeout(() => {
            callback(`Data is ${url}`);
        },2000)
    }
    
}

fetchData('',(response) => {
    console.log(response);
})