const prompt=require("prompt-sync")();
let a=Number(prompt("Enter Number:"));
let sum=0;

for(let i=1;i<=a;i++){
    sum=sum+1/i;
}
console.log(sum)
