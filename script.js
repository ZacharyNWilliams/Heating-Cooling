let actualTemp = 57;

let desiredTemp = 65;

if(actualTemp < desiredTemp){
    console.log("Run heat");
}

else if(actualTemp > desiredTemp){
    console.log("Run A/C")
}

else{
    console.log("Standby");
}



//Extended Challenge:
let tempCelsius = 15;

let targetUnit = "F";

switch (targetUnit){
    case "F":
    console.log(tempCelsius * 1.8 + 32 );
    break;
}

