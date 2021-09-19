
// Tham số 
function noti(){
    // console.log("This is a notification! "+tham_so)
    for (arg of arguments){
        console.log(arg)
    }
}


// console.log("xin chao", "ni hao", "ohio", "test", 0)

noti("thong bao 1", "thong bao 2", "thong bao 3", "thong bao 4")

// Bài tập: Viết một function, truyền vào 3 tham số là số tự nhiên, Yêu cầu kiểm tra xem có 
// phải là ba cạnh của tam giác hay không, trả về giá trị true nếu  đúng và false là sai 

console.log(triangle(4,5,3))
// => true => nếu là tam giác
// => false => sai

// Khi ba cạnh là cạnh tam giác: a, b, c => a + b >= c và b + c >= a và a + c >= b 