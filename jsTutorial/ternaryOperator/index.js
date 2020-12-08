
// ternary operator
/* cu phap cua ternary la condition ? true case : false case*/
/*function tossCoin(){

	var value = Math.random();
	var result = (value < 0.5) ? 'mat sap' : 'mat ngua' ;

	console.log(result);
}
tossCoin()*/

 
let dateOfBirth = () => {
	let num = 1999;
	return  (num == 1999) ? () => console.log('Day la nam sinh chinh xac') : () => console.log('Sai nam sinh');
	
}
dateOfBirth()();

