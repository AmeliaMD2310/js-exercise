/* 
Amelia MacDonald
W0467922
Exercise 3
Clent Side Programming
January 29, 2025
*/
 

// Basic assignment of a value to a variable
let V = 5;
console.log("Value of V:", V);

// Chained assignment (x gets assigned first, then y gets the same value)
let x = 5;
let y = x = 10;
console.log("Value of y:", y);

// Compound assignment using multiplication assignment operator
let a = 5;
a *= 10;
console.log("Value of a:", a);

// Unary arithmetic operations
let count = 0;

console.log("Post-increment (initial value):", count++); // Outputs 0, then increments
console.log("After post-increment:", count); // Outputs 1
console.log("Pre-increment:", ++count); // Outputs 2

// Comparison using logical operators
console.log("0 is strictly equal to 0:", 0 === 0); // Outputs true

// Part 1: Arithmetic operations
let num1 = 10;
let num2 = 20;

console.log("The addition result is:", num1 + num2);
console.log("The subtraction result is:", num1 - num2);
console.log("The multiplication result is:", num1 * num2);
console.log("The division result is:", num1 / num2);
console.log("The modulus is:", num1 % num2);
console.log("The power result is:", num1 ** num2);

// Part 2: Relational operators
console.log("Is num1 greater than num2?:", num1 > num2);
console.log("Is num1 less than num2?:", num1 < num2);
console.log("Is num1 less than or equal to num2?:", num1 <= num2);
console.log("Is num1 greater than or equal to num2?:", num1 >= num2);
console.log("Is num1 strictly equal to num2 (type + value)?:", num1 === num2);
console.log("Is num1 not equal to num2 (type or value)?:", num1 !== num2);

// Part 3: Logical operators with boolean variables
let isSunny = false;
let isWeekend = false;

console.log("Is it beach weather (both sunny and weekend)?:", isSunny && isWeekend);
console.log("Is it sunny or the weekend?:", isSunny || isWeekend);

// Part 4: Assignment operations
let score = 35;
score += 5; // Adds 5 to the score
console.log("New score after += 5:", score);
score *= 2; // Multiplies the score by 2
console.log("New score after *= 2:", score);

// Part 5: User interaction examples
// Displays an alert message
alert("Hello Nadia!");

// Displays a confirmation box with a question
confirm("Are You 19+ ?");

// Captures user input with a prompt, providing a default example value
prompt("Please enter your name:", "Ex: Amelia");




