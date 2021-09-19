var student = { name: 'Bao Anh' }

var name_student = "Bao Anh"

// object : đối tượng - properties: 
// + thuộc tính: Tuổi, Tên, Môn, wh, huy chương 
// name_student = "Tien Anh"

// var vdv = {
//     Tuoi: 21,
//     Ten: null,
//     Cao: 72,
//     Nang: 80,
//     "huy-chuong": "silver",
//     gioi_tinh: true
// }

// vdv.Ten = "michel"
// cach 1 

// console.log(vdv.gioi_tinh)
// if (vdv.gioi_tinh){
//     console.log("sex: male")
// }else{
//     console.log("sex: female")
// }

// cach 2, 
// console.log(vdv.Cao)
// console.log(vdv["Cao"])

// Khoi tao doi tuong 

// Object contruction 
// Object contructor  
function VDV(Tuoi, Ten, Cao, Nang, HuyChuong, GioiTinh){
    this.Tuoi = Tuoi
    this.Ten = Ten
    this.Cao = Cao 
    this.Nang = Nang
    this.HuyChuong = HuyChuong
    this.GioiTinh = GioiTinh
}

var vdv1 = new VDV(21, "Michel", 78, 80, "silver", true)

var vdv2 = new VDV(22, "ronaldo", 74, 75, "cup c1", true)

console.log(vdv2)