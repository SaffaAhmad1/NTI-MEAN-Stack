//-------- Task 1: Word Counter -----------------
console.log("-------- Task 1: Word Counter -----------------");

var sentence = "JavaScript is fun";
var words = sentence.split(" ");
var totalWords = sentence.split(" ").length;
console.log(`Total words: ${totalWords}`);

for (var i = 0; i < words.length; i++) {
  console.log(words[i] + " => " + words[i].length + " letters");
}

//-------- Task 2: Group Users by Age -----------------
console.log("-------- Task 2: Group Users by Age -----------------");

var users = [
 {name: "Ali", age: 22},
 {name: "Sara", age: 28},
 {name: "Mona", age: 35},
 {name: "Ahmed", age: 45}
];
var userAge = users.reduce(function(acc,courent){
  if(courent.age < 25){
    acc.Young.push(courent)
  }else if(courent.age >= 25 && courent.age <= 40){
    acc.Middle.push(courent)
  }else if(courent.age > 40){
    acc.Old.push(courent)
  }
  return acc
},{"Young": [],"Middle": [],"Old": []})

console.log(userAge);


//-------- Task 3: Flatten and Count Products -----------------
console.log("-------- Task 3: Flatten and Count Products -----------------");

var categories = [
  { category: "Fruits", products: ["Apple", "Banana", "Apple"] },
  { category: "Vegetables", products: ["Carrot", "Apple"] },
  { category: "Dairy", products: ["Milk", "Cheese"] },
];

var flatten = categories.flatMap(function (ele) {
  return ele.products;
});
console.log(flatten);
// ['Apple', 'Banana', 'Apple', 'Carrot', 'Apple', 'Milk', 'Cheese']

var myObject =flatten.reduce(function (acc, courent) {
  acc[courent]? acc[courent]++ : acc[courent] =1;
  return acc
}, {});
console.log(myObject);
