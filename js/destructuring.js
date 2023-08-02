const user = {
    id: 339,
    name: 'Sakib',
    age: 35,
    education: {
        degree: 'MSS'
    }
}
// const { name, age } = user;
// const { name: title } = user;

const { education: { degree }, name } = user;


// console.log(name, age);
// console.log(age, name);
//console.log(title);

//console.log(degree, name);


/* ======== Array Destructuring============ */

let numbers = [1, 2, 3, 4, 6];
let numbersArray = [1, 2, [7, 100, 300], 3, 4, 6];

//let [a, b] = numbers;
let [, , a, b] = numbers;
let [, , [, x, y]] = numbersArray;

// console.log(a, b);
// console.log(x, y);
// console.log(y, x);

/* ======== Swapping Data ============ */

let first = 100;
let second = 300;

// let temp = first;
// first = second;
// second = temp;

[second, first] = [first, second];

console.log(first, second);



