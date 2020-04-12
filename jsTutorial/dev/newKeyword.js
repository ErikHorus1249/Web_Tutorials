var today = new Date();

console.log(today);

// khoi tao mot function khoi tao doi tuong
function rat(w,speed){
  this.weigth = w;
  this.speed = speed;
};

var mouse = new rat(0.5,12);

console.log(mouse.weigth);



var tomCat = {
  name: 'tom',
  stomatch: [],
  eat: function(mouse){
    this.stomatch.push(mouse);
    return this;
  }
};
var mou1 = {
  name: 'm1'
};
var mou2 = {
  name: 'm2'
};
var mou3 = {
  name: 'm3'
};

tomCat.eat(mou1).eat(mou2);