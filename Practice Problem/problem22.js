    let a=121;
    let b=132;
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