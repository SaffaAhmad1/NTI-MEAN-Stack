function myProduct() {
  var productName = document.getElementById("name");
  var productPrice = document.getElementById("price");
  var productDesc = document.getElementById("desc");

  console.log(
    `ProductName is ${productName.value} productPrice is ${productPrice.value}  productDesc is ${productDesc.value}`
  );

  document.getElementById(
    "product1"
  ).innerText += `ProductName is ${productName.value}  ProductPrice is  ${productPrice.value}  ProductDesc is ${productDesc.value}`;
  productName.value = "";
  productPrice.value = "";
  productDesc.value = "";
}

// // window.alert("hello js");

// document.getElementById("elment1").innerText = "Hello Javascript";

// console.log("Hello Javascript");

// // document.write("Hello Javascript");

// function sayHello() {
//     var name = document.getElementById("name").value;
//     console.log("Hello" +" "+name);

//     document.getElementById("fName").innerText = `Hello ${name}`
// }
