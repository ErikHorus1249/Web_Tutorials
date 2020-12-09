
var number = [1,2,3,4,-1,10,21,150];

var moreFive = number.filter(function(x){
  if(x > 5) return x;
});

moreFive;