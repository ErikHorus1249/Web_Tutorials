
// // nguyen tac khai bao mang :Arrays

// // var / let  + ten_bien + "=" + ["item", "item"]

// var cars = ['honda', 'merc', 'bwm', 'alpha romeo', 'ferari', 'lamboghini']

// // console.log(cars)

// // cars.pop() // su dung de xoa item cuoi cung cua mang
// // cars.push("fours") // them vao cuoi 
// // cars.shift() // xoa di phan tu dau tien 
// // cars.unshift("mishubishi") // them vao dau 

// pos = cars.indexOf("bwm")

// cars.splice(pos, 4)  //xoa theo vi tri

// // console.log(cars)

// var cars_copy = cars

// console.log(cars_copy)
// var test_nan = 5/"n"

// Object: dối tượng 

var HocSinh1 = {
    "ten" : "Huy", 
    "tuoi" : 14,   
    gioi_tinh : true,
    so_thich : ['choi game', 'boi' ]
}

// var test = {"test":true}
so_thich_hs1 = HocSinh1["so_thich"]
console.log(so_thich_hs1[1])
// console.log(HocSinh2)

// BT: tao object 5 thuoc tinh , lay cac gia tri du lieu, cac du lieu co dang khac nhau 