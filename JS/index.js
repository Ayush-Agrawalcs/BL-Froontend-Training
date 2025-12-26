const pass=document.querySelector('.password');
const pass1=document.querySelector('.confirm-password');
const submit=document.querySelector('.submit');
const phone=document.querySelector('.phone');
const email=document.querySelector('.email');

submit.addEventListener('click',(e=>{
    e.preventDefault();
    if(pass.value!=pass1.value){
        alert("pasword do not match");
    }
    if(phone.value.length!=10){
        alert("phone number must be 10 digit");
    }
    if(!email.value.includes('@')){
        alert("invalid email");
    }
}))
