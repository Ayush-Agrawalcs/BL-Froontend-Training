    const prompt=require("prompt-sync")();
    let a=Number(prompt("Enter First NUmber:"));
    let b=Number(prompt("Enter Second NUmber:"));;
    if(pallendrome(a) && pallendrome(b)){
        console.log("yes both number are pallendrome");
    }
    else{
        console.log("No both numberare not pallendrome");
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