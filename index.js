const but=document.getElementById("but");
const Ayush=document.getElementById("Ayush");
const Ankur=document.getElementById("Ankur");
const Ayuhman=document.getElementById("Ayushman");
const Amitabh=document.getElementById("Amitabh");
const Diyansh=document.getElementById("Diyansh");

but.addEventListener('click', () => {
    const a = Ayush.innerHTML;
    const b=Ankur.innerHTML;
    const c=Ayuhman.innerHTML;
    const d=Amitabh.innerHTML;
    const e=Diyansh.innerHTML;
    let m = a.match(/[aeiou]/gi);
    let n= b.match(/[aeiou]/gi);
    let o=c.match(/[aeiou]/gi);
    let p=d.match(/[aeiou]/gi);
    let q=e.match(/[aeiou]/gi);
     if (m && m.length >= 2 && n && n.length >= 2) {
     let header = document.getElementsByClassName("header")[0];
     let ce = document.getElementsByClassName("c")[0];
     swapStyle(header, ce);
    }
     else if (m && m.length >= 2 && o && o.length >= 2) {
        let header = document.getElementsByClassName("header")[0];
        let de = document.getElementsByClassName("d")[0];
         swapStyle(header, de);
    } else if (m && m.length >= 2 && p && p.length >= 2) {
        let header = document.getElementsByClassName("header")[0];
        let ee = document.getElementsByClassName("e")[0];
      swapStyle(header, ee);
    } else if (m && m.length >= 2 && q && q.length >= 2) {
        let header = document.getElementsByClassName("header")[0];
        let footer = document.getElementsByClassName("footer")[0];
         swapStyle(header, footer);
    }



if(n && n.length>=2 && o && o.length>=2){
    let header = document.getElementsByClassName("c")[0];
        let footer = document.getElementsByClassName("d")[0];
       swapStyle(header, footer);
}
else if(n && n.length>=2 && p && p.length>=2){
let header = document.getElementsByClassName("c")[0];
        let footer = document.getElementsByClassName("e")[0];
    swapStyle(header, footer);
}
else if(n && n.length>=2 && q && q.length>=2){
let header = document.getElementsByClassName("c")[0];
        let footer = document.getElementsByClassName("footer")[0];
      swapStyle(header, footer);
}


if(o && o.length>=2 && p && p.length>=2){
let header = document.getElementsByClassName("d")[0];
        let footer = document.getElementsByClassName("e")[0];
     swapStyle(header, footer);
}
else if(o && o.length>=2 && q && q.length>=2){
let header = document.getElementsByClassName("e")[0];
        let footer = document.getElementsByClassName("footer")[0];
    swapStyle(header, footer);
}


if(p && p.length>=2 && q  && q.length>=2){
    let header = document.getElementsByClassName("e")[0];
        let footer = document.getElementsByClassName("footer")[0];
      swapStyle(header, footer);
}
});

function swapStyle(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const temp1 = {};
  const temp2 = {};

  for (let prop of style1) {
    temp1[prop] = style1.getPropertyValue(prop);
    temp2[prop] = style2.getPropertyValue(prop);
  }

  for (let prop in temp1) {
    el1.style.setProperty(prop, temp2[prop]);
    el2.style.setProperty(prop, temp1[prop]);
  }
}


