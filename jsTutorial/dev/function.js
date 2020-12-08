//define the funcion

function caculateTriangleSquare(a,h){
  return a*h/2;
}

//execute the funcion

caculateTriangleSquare(5,10);

// function method

var myCar = {
  name : 'Rocket',
  hight : 15,
  roar : function(){
    console.log('bruzz brumzzz');
  }
};

myCar.roar();



var myDog = {
  name : 'han',
  weight : 15,
  eat : function(bone){
    this.weight += bone.weight;
    bone.weight = 0;
    return this;
  }
};

var bone = {
  weight : 0.5
};
myDog.eat(bone);
console.log(myDog.weight);
console.log(bone.weight);