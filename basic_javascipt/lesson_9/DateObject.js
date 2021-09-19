function tinh_tuoi(){
    var date = new Date()
    var current_year = date.getFullYear()
    return current_year - Number(arguments[0])
}

console.log(tinh_tuoi(2005))