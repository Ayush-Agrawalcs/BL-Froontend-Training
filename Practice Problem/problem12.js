const prompt=require("prompt-sync")();
let c = Number(prompt("Enter Number:"));
let v = Number(prompt("Enter Number:"));

let result;

switch (c) {
  case 1:
    result = v * 12;
    console.log(v + " Feet = " + result + " Inches");
    break;

  case 2:
    result = v * 0.3048;
    console.log(v + " Feet = " + result + " Meters");
    break;

  case 3:
    result = v / 12;
    console.log(v + " Inches = " + result + " Feet");
    break;

  case 4:
    result = v * 3.28084;
    console.log(v + " Meters = " + result + " Feet");
    break;

  default:
    console.log("Invalid choice");
}
