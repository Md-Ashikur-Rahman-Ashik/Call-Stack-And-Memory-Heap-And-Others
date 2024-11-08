"use strict";

const Car = function (brand, price, stock) {
  this.brand = brand;
  this.price = price;
  this.stock = stock;

  //!   Avoid this type of action
  //   this.totalProfit = function(){

  //   }
};

//* New empty object {} is created
//* Function is called and this = {}
//* Empty object is linked to prototype
//* Object is returned

const myCar = new Car("Toyota", 10, 5);
const h6 = new Car("Haval", 15, 2);

// console.log(myCar);
// console.log(h6);

Car.prototype.totalProfit = function () {
  return this.price * this.stock;
};

// console.log(h6.totalProfit());
// console.log(myCar.totalProfit());

const arr = [1, 1, 5, 7, 9, 2, 8, 7, 3, 5, 5];

// new Array = []

// console.log(arr.__proto__);

//! DON'T DO THIS KIND OF THINGS
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
