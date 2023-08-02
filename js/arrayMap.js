let numbers = [1, 2, 3, 4, 5];

numbers.map(function (number) {
    //console.log(number);
    return number * 3;
});

const result = numbers.map((number) => number * 3);

console.log(numbers);
console.log(result);