//1. Function

var box = 'This is a string'
console.log(box);

//First occurence of substring
var position = box.indexOf('is');
console.log(position);

//Second occurence of substring
position = box.lastIndexOf('is'); 
console.log(position);

var dabba = 'This is a dabba'

//Slice: 
var size = dabba.slice(10,12);
console.log(size);

//Substr: 
// var size = dabba.substr(10,5);
// console.log(size);


// Substr: para1 selects , para2 cuts
// var size = dabba.substr(0,4);
// console.log(size);

//Uppercase:
var struppercase = 'Wow you are coding';
console.log(struppercase);

var struppercase1 = (struppercase.toUpperCase())
console.log(struppercase1);

//Lowercase:
var strlowercase = 'Wow you are coding';
console.log(strlowercase);

var strlowercase1 = (strlowercase.toLowerCase())
console.log(strlowercase1);

//Replace:
var dabba2 = dabba.replace('dabba','variable');
console.log(dabba2);

//length:
var dabba3 = dabba.charAt(10);
console.log(dabba3);

var as = '   this   is a line    ';

//Whitespace:
var dabba4 = as.trim();
console.log(dabba4);