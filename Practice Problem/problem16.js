const prompt=require("prompt-sync")();
let a=Number(prompt("Enter Number:"));
let fact=1;
for(let i=1;i<=a;i++){
    fact=fact*i;
}
console.log(fact);