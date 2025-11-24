let nums = [10, 25, 7, 40, 32];

let sum = nums.reduce((a,b) => a + b, 0);
let largest = Math.max(...nums);

console.log("Sum:", sum);
console.log("Largest:", largest);
