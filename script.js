// function inception() {
//   inception();
// }

// inception();

// const add = (a, b) => {
//   return a + b;
// };

// const result = add(2, 2);
// console.log(result);

// const calculate = () => {
//   return add(2, 2);
// };

// calculate();

// const arr = [];

// for (let i = 1; i > 0; i++) {
//   arr.push(i);
// }

// Hoisting

// console.log(name);
// var name = "Hero";
// console.log(name);

// test();

// (function test() {
//   console.log("Test");
// })();

// const test = () => {
//   console.log("Test");
// };

// Lexical Environment

// const calc = (a, b) => {
//   // return a + b;
//   let num1 = a;
//   let num2 = b;

//   const add = () => {
//     return num1 + num2;
//   };

//   return add();
// };

// console.log(calc(2, 2));

// const sub = () => {
//   let number = 5;
// };

// console.log(number);

// Scope

// let firstName = "Hero";

// const secondFunction = () => {
//   let lastName = "Alam";

//   console.log(firstName);

//   const firstFunction = () => {
//     console.log(lastName);
// let lastName = "Alam";

// console.log(lastName);
// };

//   firstFunction();
// };

// firstFunction();
// secondFunction();

// const firstFunction = () => {
//   let firstName = "Hero"
// }

// if(4 < 5){
//   let lastName = "Alam"
// }

// Exploring "this"

console.log(this);
