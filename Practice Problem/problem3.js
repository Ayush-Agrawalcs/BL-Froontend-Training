const prompt=require("prompt-sync")();
let year=Number(prompt("Enter Number:"));
if((year%4==0 && year%100!=0) || (year%400==0)){
    console.log("Leep Year");
}
else{
    console.log("Not a Leep Year");
}