// "use strict";

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

// const CarProto = {
//   totalProfit() {
//     return this.price * this.stock;
//   },

//   modifier(brand, price, stock) {
//     this.brand = brand;
//     this.price = price;
//     this.stock = stock;
//   },
// };

// const h6 = Object.create(CarProto);

// h6.brand = "Haval";
// h6.price = 10;
// h6.stock = 2;

// h6.modifier("Haval", 10, 2);

// console.log(h6);

// * call() and apply()

// const shohag = {
//   company: "Shohag",
//   serialCode: "SH",
//   bookings: [],

// book: function () {},
//   book(name, id) {
//     console.log(
//       `${name} booked a seat in ${this.company} ${this.serialCode}${id}`
//     );

//     this.bookings.push({
//       name,
//       bus: `${this.company} ${this.serialCode}${id}`,
//     });
//   },
// };

// shohag.book("Ashikur Rahman", 110);
// console.log(shohag.bookings);

// const book = shohag.book;

// book("Mezba", 255);
// book.call(shohag, "Mezba", 255);
// console.log(shohag.bookings);

// const hanif = {
//   company: "Hanif",
//   serialCode: "HA",
//   bookings: [],
// };

// const bookingInfo = ["Abdullah Al Fahim", 555];

// book.call(hanif, "Abdullah Al Fahim", 555);
// book.apply(hanif, bookingInfo);
// book.call(hanif, ...bookingInfo);
// console.log(hanif.bookings);

// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// Person.prototype.calculateAge = function (year) {
//   return year - this.birthYear;
// };

// const mir = new Person("Mir", 1970);
// console.log(mir.calculateAge(2058));

// const Student = function (name, birthYear, subject) {
// Person(name, birthYear);
// Person.call(this, name, birthYear);
// this.subject = subject;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.intro = function () {
//   return `I'm ${this.name}`;
// };

// const mezba = new Student("Mezba Abedin", 1965, "Science");
// console.log(mezba.calculateAge(2001));

// class Person {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }

//   calculateAge() {
//     return 2030 - this.birthYear;
//   }
// }

// const mizan = new Person("Mizan", 1980);
// console.log(mizan);

// class Student extends Person {
//   constructor(name, birthYear, subject) {
//     super(name, birthYear);
//     this.subject = subject;
//   }

//   calculateAge() {
//     return 2040 - this.birthYear;
//   }
// }

// const fahim = new Student("Fahim", 1988, "CSE");
// console.log(fahim.calculateAge());

// call() and apply()

/*const shohag = {
  company: "Shohag",
  serialCode: "SH",
  bookings: [],

  // book: function(){

  // }

  book(name, id) {
    console.log(
      `${name} booked a seat in ${this.company} ${this.serialCode}${id}`
    );

    this.bookings.push({
      name,
      bus: `${this.company} ${this.serialCode}${id}`,
    });
  },
};*/

// shohag.book("Mir Hussain", 110);
// console.log(shohag.bookings);

// const book = shohag.book;
// book.call(shohag, "Mezba Abedin", 255);

// const hanif = {
//   company: "Hanif",
//   serialCode: "HA",
//   bookings: [],
// };

// book.call(hanif, "Abdullah Al Fahim", 555);
// book.apply(hanif, ["Abdullah Al Fahim", 555]);

// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// Person.prototype.calculateAge = function (year) {
//   return year - this.birthYear;
// };

// const mir = new Person("Mir", 1970);
// console.log(mir.calculateAge(2024));

// const Student = function (name, birthYear, subject) {
//   Person.call(this, name, birthYear);
//   this.subject = subject;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.intro = function () {
//   return `I'm ${this.name}`;
// };

// const mezba = new Student("Mezba Abedin", 1965, "Science");
// console.log(mezba.calculateAge(2024));

// class Person {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }

//   calculateAge() {
//     return 2030 - this.birthYear;
//   }
// }

// const mizan = new Person("Mizan", 2000);
// console.log(mizan);

// class Student extends Person {
//   constructor(name, birthYear, subject) {
//     super(name, birthYear);
//     this.subject = subject;
//   }

//   calculateAge() {
//     return 2040 - this.birthYear;
//   }
// }

// const fahim = new Student("Fahim", 1990, "CSE");
// console.log(fahim.calculateAge());

//* Class Declaration

// class CarCl{

// }

//* Class Expression

/*const CarCl = class {
  constructor(brand, price, stock) {
    this.brand = brand;
    this.price = price;
    this.stock = stock;
  }

  // Instance method
  totalProfit() {
    return this.price * this.stock;
  }

  // Static method
  static salam() {
    console.log("As Salamu Alaikum");
  }
};*/

// const h6 = new CarCl("Haval", 10, 2);
// const rav4 = new CarCl("Toyota", 18, 2);
// console.log(rav4.totalProfit());
// CarCl.salam();

// const CarProto = {
//   totalProfit() {
//     return this.price * this.stock;
//   },

//   modifier(brand, price, stock) {
//     this.brand = brand;
//     this.price = price;
//     this.stock = stock;
//   },
// };

// const h6 = Object.create(CarProto);
// h6.modifier("Haval", 10, 2);
// console.log(h6.totalProfit());

/*try {
  // console.loge("All good");
  // throw new Error("Something went wrong");
  Promise.reject("It got carried away");
} catch (err) {
  console.log(err);
}*/

// console.log("All good");

// (async () => {
//   try {
//     await Promise.reject("It got carried away");
//   } catch (err) {
//     console.log(err);
//   }
// })();

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "My Error";
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "Database Error";
    this.message = "Something went wrong in the database";
  }
}

throw new DatabaseError();
