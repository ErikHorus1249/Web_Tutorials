var fs = require('fs');

var youTubeString = fs.readFileSync('/home/erik/Downloads/www.youtube.com_01-04-2020.json', {encoding: 'utf-8'});

var youtubeJason = JSON.parse(youTubeString);

console.log(youtubeJason);