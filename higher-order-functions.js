//Code provided in class
// Simple functions and a loop.
// Run this file with: node simple-functions.js

function double(number) {
return number * 2;
}

function triple(number) {
return number * 3;
}

console.log('Double 5:', double(5)); // 10
console.log('Triple 5:', triple(5)); // 15

const numbers = [1, 2, 3, 4];
const doubledNumbers = [];

// Double each number and add it to the new array.
for (let i = 0; i < numbers.length; i++) {
doubledNumbers.push(double(numbers[i]));
}

console.log('Original numbers:', numbers); // [1, 2, 3, 4]
console.log('Doubled numbers:', doubledNumbers); // [2, 4, 6, 8]

console.log('This will test the first change.');