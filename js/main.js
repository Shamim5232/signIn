let crtBtn=document.querySelector('#CrtBtn');
let register=document.querySelector('.singInSection');
let clsbtn=document.querySelector('#closeBtn');
let signIn=document.querySelector('#SignIn');
let resetPass=document.querySelector('#resetPass');
let forgotPart=document.querySelector('.forgotPart');
let resetClsBtn=document.querySelector('#resetClsBtn');
let backLogin=document.querySelector('.backLogin');

crtBtn.onclick=()=>{
    register.classList.toggle('active');
}
clsbtn.onclick=()=>{
    register.classList.remove('active');
}

resetPass.onclick=()=>{
    forgotPart.classList.toggle('active');
}
resetClsBtn.onclick=()=>{
    forgotPart.classList.remove('active');
}
backLogin.onclick=()=>{
    forgotPart.classList.remove('active');
}

signIn.onclick=()=>{
    register.classList.remove('active');
}