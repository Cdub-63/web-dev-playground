let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
console.log(`You entered: ${typeof num1} ${num1} and ${typeof num2} ${num2}`);

const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${diff}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);