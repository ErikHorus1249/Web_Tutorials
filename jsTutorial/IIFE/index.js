
// IILE immediately Invoked Function Expression
// có nghĩa là khởi tạo một function và thực thi nó ngay lập tức.

var greeting = 'Hola';
var name = 'Thau';

/*(function(window, name){
 //code here
 var greeting = 'Hello';
 console.log(greeting + ' ' + name)
})('', 'Nam');*/

(function(window, name){ //code here 
  'use strict';
  greeting = 'Hello'; 
  console.log(greeting + ' ' + name) 
})('', 'nam');