const prompt=require("prompt-sync")();
let n=Number(prompt("Enter Number:"));
if (n === 1) {
  console.log("Unit");
} 
else if (n === 10) {
  console.log("Ten");
} 
else if (n === 100) {
  console.log("Hundred");
} 
else if (n === 1000) {
  console.log("Thousand");
} 
else if (n === 10000) {
  console.log("Ten Thousand");
} 
else {
  console.log("Invalid input");
}
