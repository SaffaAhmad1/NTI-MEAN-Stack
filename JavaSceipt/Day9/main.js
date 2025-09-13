const URL= "https://jsonplaceholder.typicode.com/posts";
const xhr= new XMLHttpRequest();

xhr.open("GET",URL);

xhr.addEventListener("load",()=>{
    console.log(xhr.response);
})

xhr.send();