var user = [
  { name: "Ali",  city: "CAI" },
  { name: "Sara", city: "GZA" },
  { name: "Mona", city: "CAI" },
];
var myObj ={}
for(var i=0; i< user.length;i++){
  if(myObj[user[i].city]){
  myObj[user[i].city].push(user[i])
}else{
  myObj[user[i].city] = [user[i]]
}
}
console.log(myObj);


//Task3
var students = [
  { name: "safa", age: 25, grade: "A", isGraduated: true },
  { name: "ahmed", age: 22, grade: "B", isGraduated: false },
  { name: "sara", age: 19, grade: "A", isGraduated: false },
];
var sumAge = 0;
for (var i = 0; i < students.length; i++) {
  sumAge += students[i].age;
  var average = sumAge / students.length;
}
console.log(average);

var graduateCoun = 0;
var notgraduateCoun = 0;
var graduateNum = students.filter(function (ele) {
  return ele.isGraduated == true ? graduateCoun++ : null;
});
console.log(graduateNum);
console.log(graduateCoun);

var notgraduateNum = students.filter(function (ele) {
  return ele.isGraduated == false ? notgraduateCoun++ : null;
});
console.log(notgraduateNum);
console.log(notgraduateCoun);

var keys = Object.keys(students);
console.log(keys);

var values = Object.values(students);
console.log(values);

var add = students.unshift({name:"hager" , age:23, grade:"B" , isGraduated: true});
 console.log(students);

 students[0].email="gaher123@gmail.com";
 console.log(students);

 for(var i=0; i< students.length;i++){
    delete students[i].isGraduated;
 }
console.log(students);


var names = students.map(function(ele){
  return ele.name;
})
console.log(`Student names : ${names}`);
console.log(`Average age : ${average}`);
console.log(`Number of graduated : ${graduateCoun}`);
console.log(`Number of non-graduated : ${notgraduateCoun}`);





