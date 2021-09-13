// 1. JSON => stringify parse

const student = {
  name: "Sakib",
  age: 24,
  book: ["ABC", "Why?"],
};

const studentJSON = JSON.stringify(student);
// console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 43, 54, 65, 34];
numbers.forEach((num) => console.log(num)); // if nothing to return
numbers.map((num) => num * 2); // if something to return

// for of loop for array like object
// loop on an object using for in

// add or remove from an array
const products = [
  { name: "laptop", price: 3900, brand: "lenovo", color: "silver" },
  { name: "phone", price: 9000, brand: "iphone", color: "golden" },
  { name: "watch", price: 7200, brand: "ribon", color: "green" },
  { name: "sunglass", price: 300, brand: "cannon", color: "blue" },
  { name: "camera", price: 3200, brand: "lenovo", color: "silver" },
];

const newProduct = { name: "webcam", price: 700, brand: "Lal" };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new arrat without the phone
const remaining = products.filter((p) => p.name !== "phone");
