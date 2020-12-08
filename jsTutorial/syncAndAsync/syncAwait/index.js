
//Sync Await

/*var fs = require('fs');

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
}*/

/*async function run(){
	var song1 = await readFilePromise('./song.txt');
	var song2 = await readFilePromise('./song2.txt');
	console.log(song1, song2);
	return [song1, song2];
}

run().then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
});*/

var fs = require('fs');

function readFilePromise(path){
	return new Promise(function(resolve, reject){
		fs.readFile(path, {encoding: 'utf-8'}, function(data, err){
			if(err){
				reject(err);
			}
			else{
				resolve(data);
			}
		})
	})
}

async function run(){
	var song2 = await readFilePromise('./song2.txt');
	
	var song3 = await readFilePromise('./song3.txt');

	return [song2, song3];
	console.log(song2, song3);
}

run().then(function(value, error){
	console.log(value);
}).catch(function(error){
	console.log(error);
});