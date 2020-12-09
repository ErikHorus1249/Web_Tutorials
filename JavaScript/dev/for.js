
var employees = [
  {name : 'hieu', age : 15},
  {name : 'nam', age : 12},
  {name : 'hoang', age : 13},
  {name : 'yamato', age : 21},
  {name : 'Akagi', age : 32}
]

for(i = 0; i<5; i++){
  console.log(employees[i].age);
}

for(i = 0; i<5; i++){
  console.log(employees[i].name);
}

// su dung for de duyet cac phan tu trong mang
for(var employee of employees ){
  console.log(employee.name);
}

// su dung for de duyet qua cac key cua mot doi tuong

var myDog = {
  name : 'Jacki',
  age : 2,
  weight : 12,
  isAlive : false
};

for(var key in myDog){
  console.log(key);
  console.log(myDog[key]);
}
