// Math.PI
function disArea(r){
  return r*r*Math.PI;
}

console.log(disArea(5));
// Math.ceil làm tròn số lên 
console.log(Math.ceil(disArea(5)));
// Math.floor làm tòn số xuống 
console.log(Math.floor(disArea(5)));
// Math.max 
console.log(Math.max(10, 2, 5, 21, 0));
// Math.min()
console.log(Math.min(10, 2, 5, 21, 0));
// random cho ra số random 
function tossAcoin(){
  var random = Math.random();
  return random > 0.5;
}

console.log('mặt sấp : ', tossAcoin());