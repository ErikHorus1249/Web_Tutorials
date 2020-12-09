var Mouse = require('./mouse');

var cat = require('./cat');

var mickey = new Mouse('red');
var jerry = new Mouse('blue');


var tom = new cat();
console.log(mickey);
console.log(jerry);
tom.eat(mickey);
tom.eat(jerry);
console.log(mickey);
console.log(jerry);
console.log(tom);