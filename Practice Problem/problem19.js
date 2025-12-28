const prompt=require("prompt-sync")();
let n=Number(prompt("Enter Number to search:"));
let low=1;
let high=100;
while(low<=high){
    console.log(low,high);
    let mid=Math.floor((low+high)/2);
    if(mid<n){
        low=mid+1;
    }
    if(mid>n){
        high=mid-1;
    }
    if(mid==n){
        console.log("Found");
        break;
    }
}