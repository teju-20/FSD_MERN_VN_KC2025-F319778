let num = 15;
console.log(num % 2 === 0 ? "Even" : "Odd");
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");
console.log(num % 3 === 0 && num % 5 === 0 
            ? "Divisible by both 3 and 5" 
            : "Not divisible by both");
