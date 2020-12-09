


function countFrom(a, b){
	return new Promise(function(resolve, reject){
		var loopID = setInterval(function(){
			a++;
			console.log(a);
			if(a==b){
				clearInterval(loopID);
				resolve('done');
			}
		}, 1000)
	});
}

countFrom(0,10).then(function(value, error){
	console.log(value);
}).catch(function(error){
	console.log(error);
});