
// call back hell

var fs = require('file-system');

var song1 = fs.readFile('./song1.txt', {encoding: 'utf-8'}, function(err, data){
	console.log(song1);
	var song2 = fs.readFile('./song2.txt', {encoding: 'utf-8'}, function(err1, data1){
		console.log(song2);
		var song3 = fs.readFile('./song3.txt', {encoding: 'utf-8'}, function(err, data){
			console.log(song3);
		});
	});
});

