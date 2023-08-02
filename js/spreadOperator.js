let numbers = [1, 2, 3, 4, 5];
let a = [...numbers];

let newNumbers = [...numbers, 6, 7, 8];

// console.log(newNumbers);
// console.log(a);

let myObj1 = { x: 1, y: 2 };
let myObj2 = { a: 1, b: 2 };

let myObj = { ...myObj1, ...myObj2 };

console.log(myObj);