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