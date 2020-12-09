var readlineSync = require('readline-sync');

/* Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
*/
//Do
/*
var userNames = [];

while(true){
	var userName  = readlineSync.question('Nhap vao ten cua ban : ');
	if(userName=='') break;
	userNames.push(userName);
}
console.log(userNames);
*/
/*
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
*/

var pet = {};

var name = readlineSync.question('ten con cho la gi ? ');
var weigth = readlineSync.question('can nang cua con cho la bao nhieu ? ');
var isAlive = readlineSync.question('no co con song khong ? ');

pet.name = name;
pet.weigth = parseInt(weigth);
pet.isAlive = isAlive;

console.log(pet);
