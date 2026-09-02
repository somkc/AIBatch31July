// ========================================
// EXPLICIT TYPE CONVERSION
// ========================================

console.log("===== EXPLICIT TYPE CONVERSION =====");

// ----------------------------------------
// 1. String to Number
// ----------------------------------------

let age = "25";

console.log("Before conversion:");
console.log("Value:", age);
console.log("Type:", typeof age);

age = Number(age);

console.log("After conversion:");
console.log("Value:", age);
console.log("Type:", typeof age);


// ----------------------------------------
// 2. Number to String
// ----------------------------------------

let salary = 50000;

console.log("\nBefore conversion:");
console.log("Value:", salary);
console.log("Type:", typeof salary);

salary = String(salary);

console.log("After conversion:");
console.log("Value:", salary);
console.log("Type:", typeof salary);


// ----------------------------------------
// 3. String to Boolean
// ----------------------------------------

let name = "John";

console.log("\nBefore conversion:");
console.log("Value:", name);
console.log("Type:", typeof name);

let nameBoolean = Boolean(name);

console.log("After conversion:");
console.log("Value:", nameBoolean);
console.log("Type:", typeof nameBoolean);


// ----------------------------------------
// 4. Number to Boolean
// ----------------------------------------

let number = 1;

console.log("\nBefore conversion:");
console.log("Value:", number);
console.log("Type:", typeof number);

let numberBoolean = Boolean(number);

console.log("After conversion:");
console.log("Value:", numberBoolean);
console.log("Type:", typeof numberBoolean);


// ----------------------------------------
// 5. Boolean to Number
// ----------------------------------------

let isAvailable = true;

console.log("\nBefore conversion:");
console.log("Value:", isAvailable);
console.log("Type:", typeof isAvailable);

let booleanNumber = Number(isAvailable);

console.log("After conversion:");
console.log("Value:", booleanNumber);
console.log("Type:", typeof booleanNumber);

// 