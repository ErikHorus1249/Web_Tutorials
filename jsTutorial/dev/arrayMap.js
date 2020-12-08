
var number = [1,2,3,4];

var squareNumber = number.map(function(x){
  return x*x
});

squareNumber;
var retangles = [
  {width : 15, height : 10},
  {width : 20, height : 10},
  {width : 15, height : 5},
  {width : 10, height : 10},
  {width : 15, height : 11}
];

var squareRetangles = retangles.map(function(x){
  return x.width * x.height;
});

squareRetangles;