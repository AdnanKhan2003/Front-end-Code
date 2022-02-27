function hello(){
    alert("Hello Nallasopara");
}

// 1. Syntax:
// document.getElementById("idName").addEventListener("Event",FunctionName);
// function FunctionName(){
//     alert("Hello India");
// }
       //OR
// document.getElementById("idName"1).addEventListener("Event",(It is by default)function(){
//     document.getElementById("The element you wanna change").style.backgroundColor = "green";
// });


document.getElementById("ijk").addEventListener("click",ddd);
function ddd(){
    alert("Hello India");
}

document.getElementById("ijkl").addEventListener("click",function(){
    document.getElementById("box2").style.backgroundColor = "green";
});