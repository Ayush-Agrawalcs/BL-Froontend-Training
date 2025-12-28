const prompt=require("prompt-sync")();
let a=Number(prompt("Enter Number:"));
let b=Number(prompt("Enter Number:"));
let c=Number(prompt("Enter Number:"));

let sum=(a+b)*c;
let sum1=c+(a/b);
let sum2=(a%b)+c;
let sum3=(a*b)+c;

if(sum>=sum1 && sum>=sum2 && sum>=sum3){
    console.log("Maximum is: "+sum);
}
else if(sum1>=sum && sum1>=sum2 && sum1>=sum3){
    console.log("Maximum is: "+sum1);
}
else if(sum2>=sum && sum2>=sum1 && sum2>=sum3){
    console.log("Maximum is: "+sum2);
}
else{
    console.log("Maximum is: "+sum3);
}

if(sum<=sum1 && sum<=sum2 && sum<=sum3){
    console.log("Minimum is: "+sum);
} 
else if(sum1<=sum && sum1<=sum2 && sum1<=sum3){
    console.log("Minimum is: "+sum1);
}
else if(sum2<=sum && sum2<=sum1 && sum2<=sum3){
    console.log("Minimum is: "+sum2);
}
else{
    console.log("Minimum is: "+sum3);
}