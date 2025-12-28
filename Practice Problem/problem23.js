const prompt=require("prompt-sync")();
let a=Number(prompt("Enter 1 to convert Celsius to Fahrenheit and 2 to convert Fahrenheit to Celsius: "));
if(a==1){
    let b=Number(prompt("Enter temperature in Celsius: "));
    let c=ctof(b);
    console.log(`${c.toFixed(2)} °C`);
}
else{
    let b=Number(prompt("Enter temperature in Fahrenheit: "));
    let c=ftoc(b);
    console.log(`${c.toFixed(2)} °F`);
}

function ctof(c){
    return (c*9/5)+32;
}
function ftoc(f){
    return (f-32)*5/9;
}
