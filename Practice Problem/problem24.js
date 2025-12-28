const prompt=require("prompt-sync")();
const a=Number(prompt("Enter NUmber:"));
if(pallendrome(a) && prime(a)){
    console.log("this number is prime or pallendrome");
}
else if(pallendrome(a)){
    console.log("this number is pallendrome only");
}
else if(prime(a)){
    console.log("this number is prime only");
}   
else{
    console.log("this number is not prime or pallendrome")
}



function pallendrome(a){
        let c=a;
        let sum=0;
        while(c>0){
            let r=c%10;
            sum=sum*10+r;
            c=Math.floor(c/10);
        }
        if(sum==a){
            return true;
        }
        else{
            return false;
        }
    }

function prime(a){
    let count=0;
    for(let i=2;i<=a;i++){
        if(a%i==0){
            count++;
        }
    }
    if(count==1){
        return true;
    }
    else{
        return false;
    }
}