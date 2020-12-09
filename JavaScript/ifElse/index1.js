

function getTicket(person){
	var value = 10000;
	if(person.age < 15){
		value -= value*0.2
	}
	else if(person.age > 60){
		value -= value*0.1;
	}

	return value;
}

var person = {
	age: 16
};

console.log(getTicket(person));

