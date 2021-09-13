// 1. array destructuing
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
// const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

const [first, second] = boxify(90, 34);
console.log(boxify(80, 90));

// object destructuring
const { name, age } = { name: "alu", age: 14 };
const { name, age } = { id: 12, name: "alu", salary: 2000, age: 14 };

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  watch: {
    color: "black",
    price: 500,
    brand: "garmin",
  },
};

const { machine, ide } = employee;
const { brand } = employee?.watch;
// Optional Chaining using ? mark
