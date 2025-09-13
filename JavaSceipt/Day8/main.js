// Es6

let arr =[10,20,30];

for(const i in arr){
    console.log("index in arr " + i + " value in arr " + arr[i]);

}
for(const i of arr){
    console.log("value is " + i);
}

let str="ASA";

const map = new Map();
map.set("firstName", "Saffa");
map.set("ID",20)

for(const i of map.values()){
    console.log(i);
}

const set = new Set();

set.add(10);
set.add(20);
set.add(30);

console.log(set);
console.log(set.keys());
console.log(set.entries());

// set.delete(30);
// console.log(set.has(30));

console.log(set.size);

for (const x of set.keys()) {
  console.log(x);
  // console.log(set[v]);
}

let arra =[1,1,2,2,3,3,4,4]

let set1 = new Set(arra);
console.log([...set1]);

// var products = [
//   { id: 1, name: "Laptop", price: 1000, stock: 3, category: "Computers" },
//   { id: 2, name: "Mouse", price: 50, stock: 10, category: "Accessories" },
//   { id: 3, name: "Keyboard", price: 80, stock: 5, category: "Accessories" },
//   { id: 4, name: "Monitor", price: 350, stock: 4, category: "Computers" },
// ];


// var productsTable = document.getElementById("products");
// for (var i = 0; i < products.length; i++) {
//   var p = products[i];
//   productsTable.innerHTML += `
//         <tr>
//           <td>${p.id}</td>
//           <td>${p.name}</td>
//           <td>$${p.price}</td>
//           <td>${p.stock}</td>
//           <td>${p.category}</td>
//         </tr>
//       `;
// }


// let idP = document.getElementById("id");
// let nameP = document.getElementById("name");
// let priceP = document.getElementById("price");
// let categoryP = document.getElementById("category");
// let btnAdd = document.getElementById("btnf");

// btnAdd.addEventListener("click",function(){
//     for (var i = 0; i < products.length; i++){
//     }
// })