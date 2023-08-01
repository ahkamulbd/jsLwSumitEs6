const numbers = [1, 2, 3, 4, 5, 6, 10];

// let result = numbers.find(function (currentValue) {
//     return currentValue > 4;
// })

let result = numbers.find((currentValue) => currentValue % 2 === 0)

console.log(result);
console.log(numbers);