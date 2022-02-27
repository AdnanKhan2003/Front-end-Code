//1. Loops:

//a. Old Method:
let friends = ["Adnan","Arman","Ayan","Lalla"];
for(let i = 0;i<friends.length;i++){
    console.log("Hello " + friends[i]);
}

//b. forEach Method
// friends.forEach(function names(word){
//     console.log(word);
// });
        //OR
friends.forEach(name);

function name(word){
    console.log("Welcome " + word);
}

//c.forOf:
let country = ["India","Saudi Arabia","Pakistan","Turkey","Nepal"];
for(words of country){
    console.log(words);
}

// d. forIn: It is used for object.
let student = {
    Name: "Adnan",
    Std: 12,
    Percentage: "95%"
};

for(key in student){
    console.log(`The ${key} of student is ${student[key]}`);
}

// e. While loops:
let j = 0;
while(j<4){
    console.log(`${j} is less than 4`);
    j++;
}

// f. Do While loops:
let l = 0;
do{
    console.log(l);
    l++;
}   while(l<4)