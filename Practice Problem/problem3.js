let year=Number(process.argv[2]);
if((year%4==0 && year%100!=0) || (year%400==0)){
    console.log("Leep Year");
}
else{
    console.log("Not a Leep Year");
}