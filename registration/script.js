//getElementById()
document.getElementById("head1").textContent = "Employee Details";
//querySelector()
document.querySelector("#designation").textContent = "Senior Software Developer";
//getElementsByClassName()
let information = document.getElementsByClassName("info");
for (let i = 0; i < information.length; i++) {
    information[i].style.color = "blue";
}
//textContent
document.getElementById("empName").textContent = "Arun Kumar";
//innerHTML
document.getElementsByClassName("info")[1].innerHTML =
    "Department: <b>Information Technology</b>";
//innerText
let contact = document.getElementById("contact").innerText;
document.getElementById("contactDisplay").innerText = contact;
//Style property
document.querySelector(".profile").style.backgroundColor = "#94b2d3";
document.getElementById("empName").style.fontSize = "28px";
document.getElementById("salary").style.color = "red";
document.getElementById("employeeDetails").style.padding = "25px";
document.getElementById("employeeDetails").style.border = "2px solid black";