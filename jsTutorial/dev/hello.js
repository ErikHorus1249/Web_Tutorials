console.log('xin chao');

function Mouse(color){
	this.color = color;
	this.dead = false;
}

Mouse.prototype.die = function () {
	this.dead = true;
};

function cat(){
	this.stomarch = [];
};

cat.prototype.eat = function(mouse){
	this.stomarch.push(mouse);
	mouse.die();
}

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
