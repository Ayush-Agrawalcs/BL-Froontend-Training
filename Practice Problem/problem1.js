let i=0;
let max=Number.MAX_SAFE_INTEGER;
let min=1000;
while(i<4){
let a=Math.floor(Math.random()*1000);
if(a>max){
    max=a;
}
if(a<min){
    min=a;
}
i++;
}
console.log(max)
console.log(min)
