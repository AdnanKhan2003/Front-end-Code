// 1. Operaters
console.log('1. Operators');
// There are two type of operators
// a. Unary : It has single operands
//Ex: a = -a;
// b. Binary : It has more than one operands
//Ex: a += b;

console.log('a. Operators: Operators joins two or more operands. Ex: +,-,*,/,**,%');
console.log('b. Operands: Operands are those which is joined by operators. Ex: var a,var b.');

// a. Arithmetic Operaters
console.log('a. Arithmetic Operaters');

let a = 5;
let b = 8;
console.log('The addition of a + b is',a + b);
console.log('The Subtraction of a - b is',a - b);
console.log('The multiplication of a * b is',a * b);
console.log('The division of a / b is',a / b);
console.log('The exponenation of a ** b is',a ** b);
console.log('The reminder of a % b is',a % b);

// b. Assignment Operators
console.log(' b. Assignment Operators');

let c = 16;
let d = 4;
console.log(c += d);   //c = c + d;
console.log(c -= d);   //c = c - d;
console.log(c *= d);   //c = c * d;
console.log(c **= d);  //c = c ** d;
console.log(c /= d);   //c = c / d;
console.log(c %= d);   //c = c % d;

// c. Comparison Operators
console.log(' c. Comparison Operators');

let e = 24;
let f = 4;
console.log(e >= f);
console.log(e <= f);
console.log(e == f);
console.log(e < f);
console.log(e > f);

// d. Logical Operators
console.log(' d. Logical Operators');

console.log(' a. Logical and');
let g = 50; 
let h = 5; 
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(' b.Logical or');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(' c.Logical not');
console.log(!true);
console.log(!false);

