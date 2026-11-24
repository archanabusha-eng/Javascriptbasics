//access the element and store in variable
var head1=document.getElementById('head1');
head1.style.textAlign='center';
head1.style.color='red';
//textcontent can also be used 
head1.innerText='Heading Changed!!!'

let group=document.getElementById('grp1');
group.innerHTML=`<p>I am a paragraph</p>`;

let image=document.getElementById('grp2');
image.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSL-Z4nZedaLUa-vEONsHiY_AnXPWxyqIJZDhZ0-qB7Oht6lx2pQfYLRU&s=10" alt="rose">`;


var list=document.getElementsByClassName('lichild');
list[0].textContent='Pineapple'
list[2].style.backgroundColor='lightblue'

var par=document.getElementsByTagName('p');
par[0].style.fontFamily='calibri';

var query1=document.querySelector('.lichild');
query1.style.backgroundColor='brown'