let numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce((previousValue, currentValue, currentIndex, arr) => {
    //console.log(currentIndex);
    //console.log(arr);
    const mapElements = arr.map((a) => a * 3);
    //console.log(mapElements);
    //return previousValue + currentValue;
    return mapElements;
}, 10);

console.log(sum);
// console.log(numbers);
//console.log(currentIndex);