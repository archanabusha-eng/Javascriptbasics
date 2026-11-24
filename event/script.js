// function show(){
//     alert('Button is clicked !!!')
// }
// var head=document.getElementById('head1'); //color to heading tag
// head.addEventListener('mouseover',()=>{
//     head.style.color='darkgreen';
// })

// function leave(){
//     head.style.color='black';
// }
// function display(eve){
//     console.log(eve.target.value);

// }
// var text=document.getElementById('text');
// function focusn(){
//     text.style.backgroundColor='lightblue';
// }
// function blurn(){
//     text.style.backgroundColor='white';
// }

// function submitted(){
//     alert('The form is submitted')
// }

// //regular Expression
// let email=document.getElementById('email');
// let error=document.getElementById('error');


// let regex=/^([a-zA-Z0-9\.-_#]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
// function validate(){
//     if(regex.test(email.value)){
//         error.textContent='Email is valid';
//         error.style.color='green';
//         return true;
//     }
//     else{
//         error.textContent='Email is invalid';
//         error.style.color='red';
//         return false;
//     }
// }


function verify(){
    let number=document.getElementById('num');
    let errmsg=document.getElementById('errmsg');
    try{
        let x=number.value;
        if(x<5) throw 'enter the number between 5 to 10'
        if(x>10) throw 'number is too high'
    }catch(error){
        // console.log(`the error is ${error}`);
        errmsg.textContent=`the error is ${error}`;
    }
}