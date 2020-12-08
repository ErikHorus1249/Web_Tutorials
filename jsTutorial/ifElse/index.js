
function tossCoin(){
	var value = Math.random();
	if(value < 0.5){
		console.log('Sap');
	}
	else console.log('ngua');
}

tossCoin();

function countBills(bills){
	var totals = 0;
	for(var bill of bills){
		if(!bill.fake){
			totals += bill.value;
		}
		else{
			console.log('fake bill', bills);
			break;
		}
	}
	return totals;
}
var bills = [
	{ value : 10000},
	{ value : 20000},
	{ value : 50000, fake: true},
	{ value : 100000},
	{ value : 500000}
];

console.log(countBills(bills));