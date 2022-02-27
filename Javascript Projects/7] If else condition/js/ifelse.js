let age = 18;
let voterid = 'yes';
let league = 'Ace';

// 1. Conditional Statement
// a. if Statement
if(league='Ace'){
    document.write('You are pro');
}

// b. if else Statement
if(age >= 17 && voterid == 'yes'){
    document.write("You can vote");
}else if(age >= 17 && voterid == 'no'){
    document.write("Get your voter id");
}else{
    document.write("You cannot vote");
}

        //  OR

// let option = age >= 17 ? 'You can vote' : 'You cannot vote';
// document.write(option);

// c. if else Ladder
if(league='Ace'){
    document.write('You are Pro');
}
else if(league='Platinum'){
    document.write('You are average');
}
else if(league='Gold'){
    document.write('You are noob');
}
else if(league='Silver'){
    document.write('You are bot');
}
else{
    document.write('You are Hacker');
}

//Switch statement
let saal= 22;

switch (saal) {
    case 20:
        console.log('You are no longer a teenager');
        break;

        case 18:
        console.log('You are teenager');
        break;

        case 10:
        console.log('You are kid');
        break;

        case 22:
            console.log('You should get employeed');
            break;

    default:
        console.log('You are a teenager');
        break;
}

