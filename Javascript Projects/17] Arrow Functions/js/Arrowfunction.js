let sum = (a,b)=>{
   return a + b;
}
//Arrows Function are used for shortcuts
let sum2 = (c,d)=> c + d;

let sum3 = e=> e/3; 

let state = ()=> console.log("Right now you are looking at your pc")
state();

let info = {
    Students: ["Adnan","Arman","Ayan","Lalla"],
    Greetings: " How are you",
    speak() {
        this.Students.forEach((elements)=>{
            console.log("Welcome " + elements + this.Greetings);
        });
    }
}
info.speak();
