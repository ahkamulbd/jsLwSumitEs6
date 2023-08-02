// function myFunction(...parameter) {
//     console.log(parameter);
// }
function myFunction(a, ...parameter) {
    console.log(a);
    console.log(parameter);
}

myFunction(4, 5, 6, 7, 8, 33, 45, 21, 54);
