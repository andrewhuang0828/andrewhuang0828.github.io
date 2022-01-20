let tempC = 10;
console.log(`${tempC}°C is 50°F`);
let tempF = 32;
console.log(`${tempF}°F is 0°C`)



// BMI = MASS / (HEIGHT * HEIGHT)

// caculate BMI for Lucas and John, store BMI value in their variables.

let LucasBMI, JohnBMI;
LucasBMI = 80 / 1.78**2; 
JohnBMI =  90 / 1.88**2;
lucasHigherBMI = false;


if(LucasBMI > JohnBMI){
    console.log(`Lucas' BMI ${LucasBMI} is higher than John's BMI ${JohnBMI}, that is ${lucasHigherBMI}!`);
}
else{
    console.log(`John's BMI ${JohnBMI} is higher than Lucas’ BMI ${LucasBMI}, that is ${!lucasHigherBMI}!`);
}


let entry = window.prompt("Please enter a number!");


if (isNaN(entry)){
    console.log("Please type in a number!");
}
else if (entry == 10){
    console.log("You win 10 points");
}
else if (entry == 8){
    console.log("You win 8 points");
}
else{
    console.log("NOT MATCHED!!");
}