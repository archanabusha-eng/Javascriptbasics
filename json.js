//json format
// let person={
//     "name":"john",
//     "age":30,
//     "city":"kochi"
// }

let person={
    name:"john",
    age:30,
    city:"kochi"
}
let jsondata=JSON.stringify(person);//used to change into json
console.log(jsondata);

//convert json to object
let obj=JSON.parse(jsondata);
console.log(obj);

//conditional statements
let age=20;
let gender='female';
if(age>18){
    console.log('the person is adult');
}
else if(age==18){
    console.log('the person is an adult and age is 18');
}
else{
    console.log('the person is minor');
}

//multiple conditional statements
if(age > 18 && gender=='male'){
    console.log('the person is adult and a male');
}
else if(age > 18 && gender=='female'){
     console.log('the person is adult and a female');
}
else{
    console.log('the person is minor');
}

let a=20;
let b=10;
if(a==10 || b==20){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
let agree=false;
if(agree){
    console.log('go ahead with the decision');
}
else{
    console.log('reconsider the decision')
}
//ternary operator
(agree)?console.log('I agree'):console.log('I disagree');

//control statements
//for loop----print numbers 1 to 10

for(let i=0;i<10;i++){
    console.log(i+1);
}
//for of loop(string,array)
let fruits=['grapes','pear','pineapple'];
let str='javascript';
for (let x of str){
    console.log(x);
}
//for in loop
for(let key in person){
    console.log(person[key]);
}
//while loop
let ind=0;
while(ind<10){
    console.log(ind+1);
    ind++;

}
//do while loop
let i=0;
do{
    console.log(i+1);
    i++;
}while(i<10)



