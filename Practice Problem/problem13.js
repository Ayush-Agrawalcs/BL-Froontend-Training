const prompt=require("prompt-sync")();
let a=Number(prompt("Enter Number:"));

for (let i = 0; i <= a; i++) {
  console.log(Math.pow(2, i));
}
