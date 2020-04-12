var numbers = [1, 5, 0, 15, 2];

ascendingNumbers = numbers.sort(function(a,b){
  console.log(a, b);
  return a - b;
});

console.log(ascendingNumbers);

decendingNumbers = numbers.sort(function(a,b){
  console.log(a, b);
  return b - a;
});

console.log(decendingNumbers);

// a - b neu la day tang va nguoc lai


var employees = [
  {name: 'thao', age: 21},
  {name: 'tuan', age: 17},
  {name: 'duc', age: 25},
  {name: 'kim', age: 15}
];

var sortedEmplyees = employees.sort(function(a,b){
  return a.age - b.age;
});

console.log(sortedEmplyees);


var products = [
  { name: 'giay an', price: 5000, stock: 4},
  { name: 'giay bata', price: 85000, stock: 14},
  { name: 'Ta tre em', price: 21000, stock: 2},
  { name: 'dau thuc vat', price: 47000, stock: 5},
  { name: 'mi tom', price: 4000, stock: 70},
  { name: 'chao', price: 5000, stock: 21}
];

var sortByStock = products.sort(function(a,b){
  return b.stock - a.stock;
});

console.log(sortByStock);

var sortByValue = products.sort(function(a,b){
  return (b.stock * b.price) - (a.stock * a.price);
});

console.log(sortByValue);