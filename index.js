"use strict";

// const Car = function (brand, price, stock) {
// this.brand = brand;
// this.price = price;
// this.stock = stock;

//!   Avoid this type of action
//   this.totalProfit = function(){

//   }
// };

//* New empty object {} is created
//* Function is called and this = {}
//* Empty object is linked to prototype
//* Object is returned

// const myCar = new Car("Toyota", 10, 5);
// const h6 = new Car("Haval", 15, 2);

// console.log(myCar);
// console.log(h6);

// Car.prototype.totalProfit = function () {
//   return this.price * this.stock;
// };

// console.log(h6.totalProfit());
// console.log(myCar.totalProfit());

// const arr = [1, 1, 5, 7, 9, 2, 8, 7, 3, 5, 5];

// new Array = []

// console.log(arr.__proto__);

//! DON'T DO THIS KIND OF THINGS
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// "use strict";

// const func = () => {
//  console.log(this);
// };

// const count = () => {
//   for (var i = 1; i < 5; i++) {}
//   console.log(i);
//  };
//  count();

// const car = {
//   imported: 250,
//   price: 26500000,
//   calc: function () {
//    console.log(this.price * this.imported);
//   },
//  };
//  const bike = {
//   imported: 150,
//   price: 2200000,
//  };

//  bike.calc();

// const b = 5;
// function calc(num1, num2) {
//  const a = num1;
//  const b = 2;
//  function sum() {
//   return a + b;
//  }
//  function sub() {
//   return a - b;
//  }
//  var summationResult = sum();
//  var subtractionResult = sub();
//  return { summationResult, subtractionResult };
// }
// const result = calc(5, 15);
// console.log(result);

//* Class Declaration

// class CarCl{

// }

//* Class Expression

// const CarCl = class {
// constructor(brand, price, stock) {
//   this.brand = brand;
//   this.price = price;
//   this.stock = stock;
// }

// Instance Method
// totalProfit() {
//   return this.price * this.stock;
// }

// Static Method
// static hello() {
//   console.log("Hello World");
// }
// };

// const myCar = new CarCl("Toyota", 10, 2);
// const h6 = new Car("Haval", 18, 2);

// console.log(myCar.totalProfit());
// console.log(h6);

// CarCl.hello();

// Object.create()

const CarProto = {
  totalProfit() {
    return this.price * this.stock;
  },

  modifier(brand, price, stock) {
    this.brand = brand;
    this.price = price;
    this.stock = stock;
  },
};

const h6 = Object.create(CarProto);

// h6.brand = "Haval";
// h6.price = 10;
// h6.stock = 2;

h6.modifier("Haval", 10, 2);

console.log(h6);
