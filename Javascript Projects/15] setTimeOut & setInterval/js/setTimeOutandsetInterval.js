// 1. setTimeOut & clearTimeout
timeout = setTimeout(greet,1000,name);
console.log(timeout);

function greet(){
    document.write("This actually worked ","Adnan");   
}
        //OR

// timeout = setTimeout(function(greet){
//     document.write("This also worked ");
// },5000);
// console.log(timeout);


// clearTimeout(timeout);

// 2. setInterval & clearInterval
// interval = setInterval(greet2,3000);

// function greet2(){
//     document.write("Welcome to javascript")
// }
// console.log(interval);
         //OR
         
setInterval(function(){
    document.write("This is amazing")
},4000);
// clearInterval(2);