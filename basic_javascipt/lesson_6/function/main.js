

// [BÀI TẬP]Viết một chương trình cho phép nhập vào hai số và kết quả trả về bằng alert là kết quả của phép cộng
// của hai số đó
// CHÚ Ý : viết một function để thực hiện bài toán

// dầu vào là gì ? 5 , 4
// xử lý cái gì ? thực hiện phép cộng : 5 + 4 => function 
// kết quả là gì ? 9

function add(a, b){
    return Number(a) + Number(b) 
}

var num1 = prompt("Nhap vao so dau tien:")
var num2 = prompt("Nhap vao so thu hai:")

alert("ket qua cua pheps cong la: "+add(num1, num2))