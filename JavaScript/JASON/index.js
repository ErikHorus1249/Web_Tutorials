var myDog = {
	name: 'jaki',
	weigth: 12,
	isAlive: true
};

var myDogString = JSON.stringify(myDog);

var mycat = '{"name": "mili","weigth": "2.3", "isAlive": "false"}';
var mycat = JSON.parse(myDogString);
//console.log(myDog);
//console.log(myDogString);
console.log(mycat);