const prompt=require("prompt-sync")();
let day = Number(prompt("Enter Number:"));
let month = Number(prompt("Enter Number:"));

let result = false;

if (month === 3) {
  if (day >= 20 && day <= 31) {
    result = true;
  }
} 
else if (month === 4) {
  if (day >= 1 && day <= 30) {
    result = true;
  }
} 
else if (month === 5) {
  if (day >= 1 && day <= 31) {
    result = true;
  }
} 
else if (month === 6) {
  if (day >= 1 && day <= 20) {
    result = true;
  }
}

console.log(result);
