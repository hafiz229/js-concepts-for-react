const products = [
  { name: "laptop", price: 3900, brand: "lenovo", color: "silver" },
  { name: "phone", price: 9000, brand: "iphone", color: "golden" },
  { name: "watch", price: 7200, brand: "ribon", color: "green" },
  { name: "sunglass", price: 300, brand: "cannon", color: "blue" },
  { name: "camera", price: 3200, brand: "lenovo", color: "silver" },
];

const brands = products.map((product) => product.brand);
// console.log(brands);
const prices = products.map((product) => product.price);
// console.log(prices);

// 2. forEach do not return anythin
// products.forEach((product) => console.log(product));
// products.forEach((product) => console.log(product.color));

// 3. filter (return all of the match cases)
const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap);
const specificName = products.filter((p) => p.name.includes("none"));
console.log(specificName);

// 4. find (return only the first one)
const special = products.find((p) => p.name.includes("n"));
// console.log(special);
