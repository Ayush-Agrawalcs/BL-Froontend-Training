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
        let tempClass = header.className;
        header.className = ce.className;
        ce.className = tempClass;
    }
     else if (m && m.length >= 2 && o && o.length >= 2) {
        let header = document.getElementsByClassName("header")[0];
        let de = document.getElementsByClassName("d")[0];
        let tempClass = header.className;
        header.className = de.className;
        de.className = tempClass;
    } else if (m && m.length >= 2 && p && p.length >= 2) {
        let header = document.getElementsByClassName("header")[0];
        let ee = document.getElementsByClassName("e")[0];
        let tempClass = header.className;
        header.className = ee.className;
        ee.className = tempClass;
    } else if (m && m.length >= 2 && q && q.length >= 2) {
        let header = document.getElementsByClassName("header")[0];
        let footer = document.getElementsByClassName("footer")[0];
        let tempClass = header.className;
        header.className = footer.className;
        footer.className = tempClass;
    }



if(n && n.length>=2 && o && o.length>=2){
    let header = document.getElementsByClassName("c")[0];
        let footer = document.getElementsByClassName("d")[0];
        let tempClass = header.className;
        header.className = footer.className;
        footer.className = tempClass;
}
else if(n && n.length>=2 && p && p.length>=2){
let header = document.getElementsByClassName("c")[0];
        let footer = document.getElementsByClassName("e")[0];
        let tempClass = header.className;
        header.className = footer.className;
        footer.className = tempClass;
}
else if(n && n.length>=2 && q && q.length>=2){
let header = document.getElementsByClassName("c")[0];
        let footer = document.getElementsByClassName("footer")[0];
        let tempClass = header.className;
        header.className = footer.className;
        footer.className = tempClass;
}


if(o && o.length>=2 && p && p.length>=2){
let header = document.getElementsByClassName("d")[0];
        let footer = document.getElementsByClassName("e")[0];
        let tempClass = header.className;
        header.className = footer.className;
        footer.className = tempClass;
}
else if(o && o.length>=2 && q && q.length>=2){
let header = document.getElementsByClassName("e")[0];
        let footer = document.getElementsByClassName("footer")[0];
        let tempClass = header.className;
        header.className = footer.className;
        footer.className = tempClass;
}


if(p && p.length>=2 && q  && q.length>=2){
    let header = document.getElementsByClassName("e")[0];
        let footer = document.getElementsByClassName("footer")[0];
        let tempClass = header.className;
        header.className = footer.className;
        footer.className = tempClass;
}
});
