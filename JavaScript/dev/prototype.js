
function Mouse(n, w){
  this.type = 'mouse'
  this.name = n,
  this.weigth = w
}

console.log(Mouse.prototype.constructor == Mouse);
// prototype gan giong api

Mouse.prototype.sleep = function(){
  console.log('Sleeping...');
};
// prototype giups tiet kiem bo nho thay vi moi lan khoi tao cung mot funcion
var je = new Mouse('jerry',1.5);
var je1 = new Mouse('jerry1', 2);
console.log(je.sleep() == je1.sleep());
console.log(je.sleep());


