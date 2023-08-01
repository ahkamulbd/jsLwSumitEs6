const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers.filter(function (currentValue, index, arr) {
    return currentValue % 2 === 0;
});

console.log(numbers);
console.log(result);