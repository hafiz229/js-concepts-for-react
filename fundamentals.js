// 1. How to declare a variable using let and const
const fatherName = "Arnold";
let season = "rainy";
season = "winter";

// 2. conditions: if..else
// 6 basic conditions >,<, ===, !==, <=, >=
// multiple conditions: &&, ||

// 3. array declare
// index,
// length, push
const numbers = [39, 39, 2, 23];
numbers[0] = 56;

// 4. for loop, while loop

// 5. function

// 6. Object
const student = {
  name: "Sakib",
  age: 24,
  book: ["ABC", "Why?"],
};

const myVariable = "age";

// 3 ways to access property by name
console.log(student.name); // direct by property
console.log(student["name"]); // access via property name string
console.log(student[myVariable]); // access via perperty name in a variable
