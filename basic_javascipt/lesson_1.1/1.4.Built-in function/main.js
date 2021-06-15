// Hien thi tat ca cac noi dung ra man hinh
// number 
// text 
// variable

// alert("Submit succesfully !")

// dung de lay du lieu cua nguoi dung nhap vao 
// prompt("Nhap vao so luong ny cua ban ?")
// dung de chay mot funtion sau not thoi gian nhat dinh 

function alarm(time){
    if(time >= 6){
        return true
    }
    else{
        return false
    }
}

setTimeout(alarm(6), 0.3) 
