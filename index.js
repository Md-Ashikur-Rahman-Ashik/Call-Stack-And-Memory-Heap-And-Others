"use strict";

const Car = function (brand, price, stock) {
  this.brand = brand;
  this.price = price;
  this.stock = stock;

  //   this.totalProfit = function(){

  //   }
};

//* New empty object {} is created
//* Function is called and this = {}
//* Empty object is linked to prototype
//* Object is returned

const myCar = new Car("Toyota", 10, 5);
const h6 = new Car("Haval", 15, 2);

console.log(myCar);
console.log(h6);
