// Date;
// moment.js
var moment = require('moment');
/*var now = new Date();
var myBirthDay = new  Date(1999, 1, 14);

console.log(now.getTime());
console.log(myBirthDay);*/

var now = moment('2020-04-03 07:00');
console.log(now.fromNow());