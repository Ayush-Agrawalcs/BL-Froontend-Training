let a=Number(process.argv[2]);
let i=1
let val=1;
while(i<=a && val<256){
    val=val*2;
    console.log(val);
    i++;
}