let expenses = [2000, 1500, 3500, 4000];

function totalExpenses(arr) {
    let total = arr.reduce((a,b) => a + b, 0);
    console.log("Total Spent:", total);
}

totalExpenses(expenses);
let maxExpense = Math.max(...expenses);
console.log("Max Expense:", maxExpense);