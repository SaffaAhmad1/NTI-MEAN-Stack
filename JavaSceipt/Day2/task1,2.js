// Task1:
// Create an array of 10 numbers (it can include both positive and negative values).
var myArr = [1, -2, 3, -4, 5, -6, 7, -8, 9, 10];
var sumpo = 0;
var sumall = 0;

for (var i = 0; i < 10; i++) {
  // The sum of all numbers in the array
  sumall += myArr[i];
  if (myArr[i] > 0) {
    // the sum of all positive numbers.
    sumpo += myArr[i];
  } else {
    // Use continue to skip any negative
    continue;
  }
}
console.log(sumpo);
console.log(sumall);

// Task2:
// 1. Create an object representing a student with the following properties:
// a. name (String).
// b. age (Number).
// c. grade (String).
// d. isGraduated (Boolean).

var student = {
  name: "Saffa",
  age: 25,
  grade: "B",
  isGraduated: true,
};
// Display the student's name and age using console.log().
console.log(`My Name is : ${student.name} , My Age : ${student["age"]}`);
// Change the grade of the student to a new value (e.g., "A").
student.grade = "A";
console.log(student);
// Use the Object.keys() method to display all the properties of the object.
console.log(Object.keys(student));
// Use the Object.values() method to display all the values of the object.
console.log(Object.values(student));
// Add a new property called email to the object and set it to an email address.
student.email = "safatolba984@gmail.com";
console.log(student);
// Use the delete keyword to remove the isGraduated property from the object and
// display the updated object
delete student.isGraduated;
console.log(student);