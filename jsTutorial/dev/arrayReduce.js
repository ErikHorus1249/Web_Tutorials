var number = [1,2,3,4,-1,10,21,150];

var giam = number.reduce(function(x1,x2){
  return x1 + x2;
});
giam;


var oders = [
  {name : 'choi', quantity : 2, price : 15000},
  {name : 'botGiat', quantity : 1, price : 105000},
  {name : 'giayVeSinh', quantity : 10, price : 5000},
  {name : 'miTom', quantity : 21, price : 2000}
];
var afterOders = oders.map(function(x){
  return x.quantity * x.price;
});


var total = afterOders.reduce(function(x1,x2){
  return x1 + x2;
});

total;

var numbers = [1, 0, 4, 9, 8];

var maxNumber = numbers.reduce(function(a,b){
  console.log(a, b);
  if(a >= b) return a;
  else return b;
}, 7);

maxNumber

var maxNumber = numbers.reduce(function(a,b){
	code....
}, init);



var products = [
  {name: 'giay VS', unitPrice: 20000, quantity: 5 },
  {name: 'choi lau nha', unitPrice: 30000, quantity: 1},
  {name: 'mi tom', unitPrice: 4000, quantity: 15 },
  {name: 'BVS', unitPrice: 71000, quantity: 3 },
  {name: 'dau an', unitPrice: 47000, quantity: 2 }
];

var pricePerProduct = products.map(function(item){
  return item.unitPrice * item.quantity;
});

var total = pricePerProduct.reduce(function(a,b){
  return a + b;
});

//console.log(total);

var totals = products.reduce(function(currentTotal, product){
  return currentTotal + product.unitPrice * product.quantity;
}, 0);

console.log(totals);


var items = ['hoa', 'thao', 'hanh', 'nhan'];
var a = '';
var sentence = items.reduce(function(sent, item){
  return sent + '<' + item + '>';
},'');

console.log(sentence);

var sentence1 = items.map(function(a){
  return '<' + a + '>';
});

sentence1.join('');