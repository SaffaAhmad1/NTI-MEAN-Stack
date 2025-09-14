// function average(no1,no2){
//     return (no1+no2)/2;
// }
// console.log(average(10,20));

var eventname =document.getElementById("eventName");
var eventTime =document.getElementById("timeOfEvent");
var output = document.getElementById("output");

// console.log(eventname);
// console.log(eventTime);

var counter =0;
function setIntervalFunc(){
    counter  = + eventTime.value ;
    console.log(counter);
    
    var idInterval =setInterval(function(){
        counter--;
        output.innerHTML = "Your Event will start in " +counter + "seconds...";
        // console.log(counter);
        // console.log("Your Event after " +counter);
        
    if(counter === 0){
        output.innerHTML = "Your Event is starting now!";
        // console.log("Your Event start");
        clearInterval(idInterval)
        
    }
    
},1000)
}

