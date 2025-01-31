console.log(`cc_4.js has been successfully loaded!`);

// Task 1 - If statement
let purchaseAmount = 150; // Initial purchase amount
let finalAmount = purchaseAmount; // Place holder for Initial Amount - Dicount
console.log(`The original purchase: $${purchaseAmount}`); // Displays output
if (purchaseAmount > 100) {
    let discount = .15;
    finalAmount = purchaseAmount - (purchaseAmount * discount); // Calculates discount if purchase amount is above $100
}
console.log(`The final amount after discount: $${finalAmount}`); // Displays output
// Task 1 - End

// Task 2 - For loop
let sales = [ 80, 125, 250, 350, 450]; // Array of sales
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i] // Sum value of sales to totalSales
}
console.log(`The total sales are: $${totalSales}`); // Displays output
// Task 2 - End

