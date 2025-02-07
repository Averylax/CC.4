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

// Task 3 - While loop
let stockValue = 10; // Initial stock value

while (stockValue > 0) { // Loop reduces stock value until it reaches 0

console.log(`Remaining Stock Value: ${stockValue}`); // Displays output
stockValue--; // Decreases stock value by 1
}
console.log(`Womp Womp... Out of Stock!`); // Displays output
// Task 3 - End

// Task 4 - Do While loop
let responses = 0;
do {
    console.log(`Response Amount: ${responses}`); // Displays output
    responses++; // Increases response amount by 1
    } while (responses <= 3); // Loop continues until response amount reaches 3
console.log(`The resposes have been recieived!`); // Displays output
// Task 4 - End

// Task 5 - For... In loop
let employee = {
    name: `Alice`,
    position: `Manager`,
    salary: 75000,
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`) // Displays output
};
// Task 5 - End

// Task 6 - For... Of loop
let products = ["String", "Mesh", "lacrosseBall"]; // List of products
for (let product of products) {
    console.log(`Product: ${product}`); // Displays output
}
// Task 6 - End

// Task 7 - forEach() Method
let orders = [101, 102, 103]; // List of orders
orders.forEach(function(order) {
    console.log(`Order ID: ${order}`); // Displays output
});
// Task 7 - End

// Task 8 - Function Decloration
function calculateTax(amount, taxRate) {
    return amount * taxRate; // Formula to calculate tax amount
    }
let amount = 30; // Initial amount
let taxRate = .10; // Tax amount
let tax = calculateTax(amount, taxRate); // Calculates tax amount
totalAmount = amount + tax; // Calculates total amount
console.log(`Initial amount: $${amount}`); // Displays output
console.log(`Tax rate: ${taxRate}`); // Displays output
console.log(`Thank you for the purchase, your total accumelates to: $${totalAmount}`); // Displays total amount
// Task 8 - End

// Task 9 - Function Expression
const applyDiscount = function(amount, discount) { // Function expression represented by amount and discount
    let discountAmount = price * (discount/100); // calculates discount amount
    return price - discountAmount; // returns price - discount amount
};
let price = 30; // Initial price
let discount = 10; // Discount amount
let discountedPrice = applyDiscount(price, discount); // Applying the discount
console.log(`Purchase price: $${price}`); // Displays Price
console.log(`The discount rate is: ${discount}%`); // Displays discount amount
console.log(`The discounted price is: $${discountedPrice}`); // Displays price after discount
// Task 9 - End

// Task 10 - Arrow Function
const calculatePoints = purchaseTotal => Math.floor(purchaseTotal / 10); // Function that calculates a point for every $10 spent
let purchase = 55; // Purchase amount
let points = calculatePoints(purchase); // Calculates points
console.log(`Since you spent $${purchase}, you have earned ${points} points!`); // Displays amout of points
// Task 10 - End
