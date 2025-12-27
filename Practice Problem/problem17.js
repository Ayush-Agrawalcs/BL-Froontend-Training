let counth=0;
let countt=0;
while(counth<11 && countt<11)
{
    let a=Math.floor(Math.random()*2);
    if(a==0)
        counth++;
    else
        countt++;
       
}
if(counth==11)
console.log(`Head wins 11 times ${counth}`);
else
console.log(`Tail wins 11 times ${countt}`);
