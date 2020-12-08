// co 

var fs = require('fs');
var co = require('co');
function readFilePromise(path){
	return new Promise(function(resolve, reject){
		fs.readFile(path, {encoding: 'utf-8'}, function(err, data){
			if(err){
				reject(err);
			}
			else{
				resolve(data);
			}
		});
	});
}

// co(function*(){// generator function
/*	var song1 = yield readFilePromise('./song.txt');
	var song2 = yield readFilePromise('./song2.txt');
	var song3 = yield readFilePromise('./song3.txt');*/
/*	var values = [
		yield readFilePromise('./song.txt'),
		yield readFilePromise('./song2.txt'),
		yield readFilePromise('./song3.txt')
	];*/
	// console.log(song1, song2, song3);
	// return [song1, song2, song3];
/*	return values;
}).then(function(value){
	console.log(value);
}).catch(function(error){
	console.log(error);
});
*/
var readFiles = co.wrap(function*(files){
	var values = yield files.map(function(file){
		return readFilePromise(file);
	});
	return values;
});

readFiles(['./song.txt', './song2.txt', 'song3.txt'])
.then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
});


