// function inception() {
//   inception();
// }

// inception();

const add = (a, b) => {
  return a + b;
};

// const result = add(2, 2);
// console.log(result);

const calculate = () => {
  return add(2, 2);
};

calculate();
