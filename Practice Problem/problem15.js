let a=Number(process.argv[2]);
let count=0;
for(let i=2;i<=a;i++){
    if(a%i==0){
        count++;
    }
}
if(count==1){
    console.log("It is Prime number");
}
else{
    console.log("It is not a prime number");
}