//const arrowFunctionAnonymous = () => 10;
const arrowFunctionAnonymous = () => 'Arrow Function in JS';

//console.log(arrowFunctionAnonymous());

//const arrowFunctionSingleParameter = (x) => x * x;
const arrowFunctionSingleParameter = (myName) => `My Name is ${myName}`;

//console.log(arrowFunctionSingleParameter('Abdul Hakim'));


const arrowFunctionMultiParameter = (x, y) => 2 * x + y;

//console.log(arrowFunctionMultiParameter(10, 20));

const arrowFunctionWithComplexCalculation = (x, y, z, t, a, b, c) => {
    const sum = x + y + z + t + a + b + c;
    const average = sum / 7;
    return average;
}
const result = parseFloat(arrowFunctionWithComplexCalculation(14, 25, 36, 76, 44, 55, 66));
const finalResult = result.toFixed(2);

//console.log(finalResult);

let javaScript = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function () {
        // this.libraries.forEach(function (a) {
        //     console.log(`${this.name} loves ${a}`);
        // })
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    }
}
javaScript.printLibraries();

