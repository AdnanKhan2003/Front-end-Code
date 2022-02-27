// setInterval(function(){
//     document.getElementById("time").innerHTML = "This is " + new Date();
// }, 1000);
     //OR
setInterval(update,1000);
function update(){
    document.getElementById("time").innerHTML = "This is " + new Date();
}


// 1. toTimeString()
let time = new Date();
console.log("1. toTimeString()");
console.log(time.toTimeString());

// 2. toDateString()
let date = new Date;
console.log("2. toDateString()");
console.log(date.toDateString());

// 3. getDay()
let day = new Date("30 September 2021");
console.log("3. getDay()");
console.log(day.getDay());

// 4. getMonth()
let month = new Date("30 September 2021");
console.log("4. getMonth()");
console.log(month.getMonth());

// 5. getDate()
let date2 = new Date("30 September 2021");
console.log("5. getDate()");
console.log(date2.getDate());

// 6. getFullYear()
let year = new Date();
console.log("6. getFullYear()");
console.log(year.getFullYear());

// 7. getHours()
let hours = new Date();
console.log("7. getHours()");
console.log(hours.getHours());

// 8. getDate()
let minutes = new Date();
console.log("8. getDate()");
console.log(minutes.getMinutes());

// 9. getSeconds()
let seconds = new Date();
console.log("9. getSeconds()");
console.log(seconds.getSeconds());

// 10. getMilliseconds())
let getMilliseconds = new Date();
console.log("10. getMilliseconds())");
console.log(getMilliseconds.getMilliseconds());

// 11. setDate())
let day3 = new Date();
console.log("11. setDate())");
day3.setDate(1);
console.log(day3);

// 12. setMonth())
let month2 = new Date();
console.log("12. setMonth())");
month2.setMonth(0);
console.log(month2);

// 13. setYear())
let year2 = new Date();
console.log("13. setYear())");
year2.setYear(2022);
console.log(year2);

// 14. setMinutes())
let Minutes2 = new Date();
console.log("14. setMinutes())");
Minutes2.setMinutes(18);
console.log(Minutes2);

// 15. setSeconds())
let Seconds2 = new Date();
Seconds2.setSeconds(18);
console.log("15. setSeconds())");
console.log(Seconds2);

// 16. setMilliseconds())
let Milliseconds2 = new Date();
Milliseconds2.setMilliseconds(18);
console.log("16. setMilliseconds())");
console.log(Milliseconds2);

