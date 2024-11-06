let expenses = [];

/*expense = {
    description: 'shirt', 
    amount: 2000,
    date: '01.11.24'
}; */

function addExpense(...obj) {
    for (let i = 0; i < obj.length; i++) {
        expenses.push(obj[i]);
    }
    callbackExample();
}

const displayExpenses = () => {
    expenses.forEach((expense) =>{
        console.log(expense)
    });
}

const fetchExpenses = () => {
    return expenses;
}

let calcTotal = () => { 
    let total = 0;
    expenses.forEach((expense) => {
        total += expense.amount;
    });
    console.log(total);
}

function displayDescriptions() {
    let descriptions = expenses.map((expense) => {
        return expense.description;
    })
    console.log(descriptions);
}

function aboveAmount(amt) {
    let res = expenses.filter((expense) => {
        return expense.amount > amt;
    })
    console.log(res);
}

function reduceTotalExpenses() {
    let res = 0;
    expenses.map((expense) => {
        res += expense.amount;
    })
    console.log(res);
}

function callbackExample() {
    console.log("Successfully added expense");
}

let prom = new Promise((resolve, reject) => {
    if (expenses.length != 0) {
        resolve("Successfully fetched data");
    }
    else{
        reject("Error in fetching data");
    }
});
prom.then((val) => {
    console.log(val);
}).catch((val) => {
    console.log(val);
    
});


async function synchronousFunc() {
    await fetchExpenses();
    displayExpenses();
}


addExpense(...[{
    description: 'shirt', 
    amount: 2000,
    date: '01.11.24'
},
{
    description: 'grocery', 
    amount: 1000,
    date: '01.11.24'
}]);

addExpense({
    description: 'jeans', 
    amount: 5000,
    date: '01.11.24'
})



displayExpenses();
calcTotal();
displayDescriptions();
aboveAmount(2000);
reduceTotalExpenses();
synchronousFunc()