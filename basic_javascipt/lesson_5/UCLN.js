// 4, 8
// a = 4 
// b = 8  , b = b - a = 4, b = 4, a = 4 => UCLN = 4

// a = 125, b = 5
// a = 120, b =5
// a = 115 , b = 5
 

// => BCNN = a*b / UCLN = 4*8 / 4 = 8, 

function tinh_ucln(a, b){
    while(a != b){
        if(a > b) a -= b 
        else b -= a 
    }
    // a = b 
    return a 
}

function tinh_bcnn(a, b){
    return a * b / tinh_ucln(a,b)
}

console.log("UCLN: "+tinh_ucln(50,55))
console.log("BCNN: "+tinh_bcnn(50,55))
