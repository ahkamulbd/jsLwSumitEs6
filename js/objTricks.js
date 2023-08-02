let x = 5;
let y = 6;
let z = x * y;

let myObj = {
    name: 'JavaScript',
    founder: 'Brandan Eich',
    estd: '1995',
    ranking: 1,
    x,
    y,
    z
}

let keys = Object.keys(myObj);
let values = Object.values(myObj);
let entries = Object.entries(myObj);

// console.log(keys);
// console.log(values);
console.log(entries);
