

// set timeout setTimout(fn, ms) sau milisencond thi thuc hien function
//clear timeout 
// setInterval setInterval(fn, ms) sau ms thuc hien fn va lap lai sau ms
// clearInterval
// console.log('Start');
// function Done(){
// 	console.log('Finish');
// }
// var timmerID = setTimeout(Done, 2000);
// console.log('Done');
// clearTimeout(timmerID);

function sayHello(){
	console.log('hello');
}

var loopID = setInterval(sayHello, 100);
setTimeout(function(){
	clearInterval(loopID);
	console.log('Done');
},2000);


