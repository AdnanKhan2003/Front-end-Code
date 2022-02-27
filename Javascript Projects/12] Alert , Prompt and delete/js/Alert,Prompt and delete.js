//1. Alert , Prompt and delete

// a. Alert:
let a = alert("Hello Adnan");
console.log(a);

// b. Prompt:
let b = prompt("Enter your name","Guest");
console.log(b);

// c. Delete:
let c = confirm("Do you really want to delete this file");
if(c){
    console.log("Your file has sucessfully deleted");
}
else{
    console.log("Your file is not deleted");
}