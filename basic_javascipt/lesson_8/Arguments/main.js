// console.log("Node is installed by me")

// Định nghĩa : dùng để tính toán v v, thay thế cho một giá trị khi hàm được gọi đến

// function noti(){
//     // Cố định 
//     console.log("This is a notification!")
// }

// Tham số 
function noti(tham_so){
    console.log("This is a notification! "+tham_so)
}


// Đối số  
// noti(1)

// Không giới hạn loại dữ liệu truyền vào cho hàm 
// Tính private 
// 1 tham số và nhiều tham số 

// VD đối tượng arguments

function show_arg(){
    for (let parameter of arguments){
        console.log(parameter)
    }
}

show_arg(1, 2, "ok")
