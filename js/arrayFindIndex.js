const numbers = [1, 2, 3, 4, 5, 6, 10];

const result = numbers.findIndex(function (currentValue, index, arr) {
    return currentValue % 5 === 0;
})

console.log(result);