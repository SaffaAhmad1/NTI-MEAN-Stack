// Challenge Task
var num = Math.floor(Math.random() * 50) + 1;
var attempts = 0;

function gessNum() {
  var secretNo = Number(document.getElementById("secretNumber").value);
  console.log(secretNo);
  attempts++;
  if (secretNo === num) {
    // console.log("correct" + "after attempts" + attempts);
    document.getElementById("message").innerHTML =
      '<i class="fa-solid fa-trophy text-success"></i>' +
      "Congratulations! The number was <strong>" +
      num +
      "</strong>!";
    document.getElementById("attempts").innerHTML =
      "You guessed it in " + attempts + " attempts.";
  } else {
    // console.log("not correct");
    document.getElementById("message").innerHTML =
      '<i class="fa-solid fa-xmark text-danger"></i>' + "Wrong! Try again.";
    document.getElementById("attempts").innerHTML =
      "Attempts so far: " + attempts;
  }

  document.getElementById("secretNumber").value = "";
}

console.log("The secret Number is :" +" "+num);

