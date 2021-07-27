
// function add(a,b){
//     console.log(a+b)
//     return a+b
// }

// console.log(add(2,3))

function power(a, n){
    var pow = 1
    // for(var i = 0; i < n; i++){
    //     pow *= a
    // }
    while(n--){
        pow *= a
    }

    // vong so 0: while(3) => pow = pow * a = 1*a = 2, n = 2
    // vong so 1: while(2) => pow = pow * a = 4, m = 1
    // vong so 2: while(1) => pow = 4*2 = 8, n = 0
    // vong so 3: while(0) => end 

    // 0 - > false 
    // null -> false
    // undefined -> false 

    return pow
}

console.log(power(2,3))