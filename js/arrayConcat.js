let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let numbers3 = [11, 12, 13, 14, 15];

const result1 = numbers1.concat(numbers2);
const result2 = numbers1.concat(numbers2, numbers3);

console.log(numbers1);
console.log(result1);
console.log(result2);