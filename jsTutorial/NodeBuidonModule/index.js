
// su dung file system dung method readFileSync('dir', {utf-8}) de in ra noi dung trong file

// Node buit-in Modules
var fs = require('fs');

var text = fs.readFileSync('./song.txt', { encoding: 'utf-8'});

console.log(text);

console.log(fs.writeFileSync('song2.txt', 'I am ironman'));

