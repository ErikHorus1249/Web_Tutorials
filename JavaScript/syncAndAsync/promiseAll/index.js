	var fs = require('fs');

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

/*	readFilePromise('song.txt')
		.then(function(song){
			console.log(song);
			return readFilePromise('song2.txt');
		})
		.then(function(song2){
			console.log(song2);
			return readFilePromise('song3.txt');
		})
		.then(function(song3){
			console.log(song3);
		})
		.catch(function(error){
			console.log(error);
		});*/

Promise.all([
	readFilePromise('song.txt'),
	readFilePromise('song2.txt'),
	readFilePromise('song3.txt')// resolve
]).then(function(value){
	console.log(value);
}).catch(function(error){
	console.log(error);
});
