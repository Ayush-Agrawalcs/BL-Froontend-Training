const prompt=require("prompt-sync")();
let a=Number(prompt("Enter Number:"));

switch (n) {
  case 1:
    console.log("Unit");
    break;

  case 10:
    console.log("Ten");
    break;

  case 100:
    console.log("Hundred");
    break;

  case 1000:
    console.log("Thousand");
    break;

  case 10000:
    console.log("Ten Thousand");
    break;

  default:
    console.log("Invalid input");
}
