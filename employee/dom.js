var head1=document.getElementById('head1');
head1.innerText='Employee Details';
head1.style.textAlign='center';
document.querySelector('#designation').textContent="software Developer";
let info = document.getElementsByClassName("employee-info");

for (let i = 0; i < info.length; i++) {
    info[i].style.color = "#250c97eb";
}
let name=document.getElementById('name');
name.textContent=`Anurudth`;
var empinf=document.getElementsByClassName("employee-info");
empinf[1].innerHTML = "<b>Department:Development</b>";
let contactDetails = document.getElementById("contact").innerText;

document.getElementById("contactDisplay").innerText = contactDetails;

var prof=document.getElementById("profile");
prof.style.backgroundColor = "#6ef3e8";

 var font=document.getElementById("name");
 font.style.fontSize = "35px";


 var color=document.getElementById("salary");
 color.style.color = "#6d0d0d";


var padd=document.getElementById("details");
padd.style.padding = "25px";

var border=document.getElementById("details");
border.style.border = "2px solid darkblue";