

// Call Back
function sum(a,b) {
  return a + b;
}

sum(5,122);

var coffeMachine = {
  makeCoffe : function(onFinish){
    console.log('making coffe ....');
    onFinish();
  }
};
function beep(){
  console.log('bip...bip...bip');
}
coffeMachine.makeCoffe(beep);