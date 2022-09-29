const prompt = require('prompt-sync')({sigint: true});

let diceRoll = prompt("Welcome User do you feel lucky? ")
    if(diceRoll === "yes"){
        console.log("Let's Roll!");
}   while(diceRoll !== "yes")
            diceRoll = (prompt( "Come on, give it a try: "));
    


roll = Math.ceil(Math.random()*6)
    if(roll === "yes"){
        console.log("Let's Roll!")
}   if(roll >= 5 * 0.32)
    console.log(roll);


/*
let rigged = Number(prompt("Enter a side you would like to rig between 1` and 6: "));

let roll = Math.ceil(Math.random()*7); //1-7

console.log("Actual roll: " + roll)

if(roll === 7){
    console.log(rigged);
}   else {
    console.log(roll);
}
*/
