
//Part A

function winner(n1,n2,n3,k1,k2,k3){
    let navg = (n1 + n2 + n3) / 3;
    let kavg = (k1 + k2 + k3) / 3;
    if(Math.max(navg, kavg) > 100){
        if(navg == kavg){
            return "Draw";
        }
        else if (navg > kavg){
            return "Nets Win";
        }
        else{
            return "Knicks Win";
        }
    }
    return "No Teams Win";
}


console.log("Part A");
console.log("Data 1 results: ", winner(80, 82, 100, 80, 90, 106));
console.log("Data 2 results: ", winner(98, 110, 101, 108, 92, 110));




//Part B

function tip(bill){
    
    let tip;
    switch(true){
        case (bill > 30 && bill < 100):
            tip = bill * 0.15;
            console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
            break;
        default:
            tip = bill * 0.2;
            console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
            break;
    }
   
}

console.log("Part B");
tip(285);
tip(26);
tip(90);


//Part C

let CovertCelsiusToFahrenheit = (c) => {console.log(`${c}°C is ${c * 1.8 + 32}°F`);}

let CovertFahrenheitToCelsius = (f) => {console.log(`${f}°f is ${(f - 32) * 0.5556}°c`);}


console.log("Part C");
CovertCelsiusToFahrenheit(100);
CovertCelsiusToFahrenheit(0);
CovertCelsiusToFahrenheit(10);

CovertFahrenheitToCelsius(32);
CovertFahrenheitToCelsius(10);
CovertFahrenheitToCelsius(102);


