let jsonObj = {
    Name: "Adnan",
    Food: "Rice and Dal",
    Friends: ["Aquib","Sahil2","Amir","Sahi"],
}
console.log(jsonObj);

let jsonStr = JSON.stringify(jsonObj);
console.log(jsonStr);

let jsonRep = jsonStr.replace("Rice and Dal", "Biryani");
console.log(jsonRep);

let jsonparse = JSON.parse(jsonRep);
console.log(jsonparse);