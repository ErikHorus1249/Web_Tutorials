
var dis = require('./display');
var readlineSync = require('readline-sync');
var student = require('./student');
var check = true;
var fs = require('fs');
var listSt = {
	studentsList: []
};
var dir = './data.json';
function loadData(){
	var fileContent = fs.readFileSync(dir);
	listSt = JSON.parse(fileContent);
}

function showList(){
	//console.log(listSt.studentsList);
	for(var student of listSt.studentsList){
		console.log('Ten : ',student.name,' Tuoi : ',student.age,' Diem : ', student.mark);
	}
}
function creatNewStudent(){
	var name = readlineSync.question('Ten sinh vien la :');
		var age = parseInt(readlineSync.question('Tuoi cua sinh vien : '));
		var mark = parseInt(readlineSync.question('Diem cua sinh vien : '));
		var st = new student(name, age, mark);
		listSt.studentsList.push(st);

		}

function saveFile(){
	var content = JSON.stringify(listSt);
	console.log(content);
	fs.writeFileSync(dir, content, {encoding: 'utf-8'});
}
function main () {
	loadData();
	console.log(listSt);
	while(check){
		console.log(dis.showMenu());
		var  num = parseInt(readlineSync.question('Press your number :'));
		console.log(num);
		switch(num) {
			case 1:
				dis.showCase1();
				showList();
				break;
			case 2:
				dis.showCase2();
				creatNewStudent();
				break;
			case 3:
				check = false;
				dis.showCase3();
				saveFile();
				break;
		}
	} 
}

main();