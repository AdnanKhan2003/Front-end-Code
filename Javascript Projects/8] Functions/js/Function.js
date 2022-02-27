// 1. Function: Is used when you have to put formula over and over
// DRY = Do Not Repeat Yourself

function greet(name,state){
    console.log(name + ' ' + state);
}

let name = 'Adnan';
let name1 = 'Jethalal';
let name2 = 'Iyyer';
let name3 = 'Mehta';
let name4 = 'Sodhi';
let state= 'Hello Good Morning';
greet(name,state);
greet(name1,state);
greet(name2,state);
greet(name3,state);
greet(name4,state);
// let returnvalue = greet(name3);
// console.log(returnvalue);

function sum(a,b,c){
    d = a + b + c;
    return d;
}
let add = sum(121,55,48);
console.log(add);