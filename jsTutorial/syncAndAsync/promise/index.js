// promise

/*var fs = require('promise-fs');

function onDone(song){
	console.log(song);
}

function onError(error){
	console.log(error);
}

function readFile(path){
	return fs.readFile(path, {encoding: 'utf-8'});
}
readFile('song.txt')
	.then(onDone)
	.then(function(){
		return readFile('song2.txt');
	})
	.then(onDone)
	.then(function(){
		return readFile('song3.txt');
	})
	.then(onDone)
	.catch(onError);*/

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

	readFilePromise('song4.txt')
		.then(function(song){
			console.log(song);
		})
		.catch(function(error){
			console.log(error);
		});

