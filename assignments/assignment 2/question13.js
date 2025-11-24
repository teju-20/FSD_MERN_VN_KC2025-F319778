let sales = [2500, 4000, 1800, 3200, 5000];

for (let i = 0; i < sales.length; i++) {
    console.log(`Day ${i + 1}: ₹${sales[i]}`);
}
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}   