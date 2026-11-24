// //arrays 
// let array1=[1,2,3,4,'red','grape'];
// console.log(array1);
// console.log(array1.length);
// console.log(array1[3]);
// array1.push('yellow');
// console.log(array1);
// array1.pop();
// console.log(array1);
// array1.unshift('numbers:');//insert in front
// console.log(array1);
// array1.shift();//delete from front
// console.log(array1);
// //Extract a portion of an array
// let array2=array1.slice(2,5);
// console.log(array2);
// //splice(replace)
// array1.splice(2,3,'orange','pink');
// console.log(array1);

// //objects
// let person={
//     firstName:'Maya',
//     age:20,
//     place:'kochi'

// }
// console.log(person['place']);

// let fruit={
//     firstName:'jackfruit',
//     color:'green',
//     taste:'sweet'
// }
// console.log(fruit);

// let person1=new Object();
// person1.firstName='Meera';
// person1.age=24;
// console.log(person1);

// //ES 6---classes
// class Car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;

//     }
// }
// let obj_car1=new Car('BMW',2020);
// console.log(obj_car1);
// let obj_car2=new Car('Spark',2025);
// console.log(obj_car2);

// //array of objects
// let students=[{firstName:'alice',age:20},{firstName:'bob',age:20}]
// console.log(students[1].age);

// let person2={
//     address:{
//         street:'thampanoor',
//         city:'trivandrum',
//         state:'kerala'
//     }
    
// }
// console.log(person2);

// //functions
// function addnum(a,b){
//     var sum=a+b;
//     //console.log(`sum of two numbers is ${sum}`);
//     return sum;
// }
//  var result=addnum(22,22);
// console.log(`sum of two numbers is ${result}`);

// function multiplynum(a,b){
//     var multiply=a*b;
//     return multiply;
// }
// var result=multiplynum(2,5);
// console.log(`answer is ${result}`);

//arrow function--e6
let addnum=(a,b)=>{
    return a+b;
}
let result=addnum(10,4);
console.log(`sum is ${result}`);

let sub=(a,b)=>{
    return a-b;
}
let result2=sub(10,4);
console.log(`answer is ${result2}`);

//object methods
let person2={
    firstName:'Archana',
    lastName:'BU',
    fullName:()=>{
        return person2.firstName + " " + person2.lastName;

    }
}
console.log(person2.fullName());

// array es6 methods(forEach)

// let numbers=[1,2,3,4];
// numbers.forEach(function(item,ind,arr3){

// })
let numbers=[1,2,3,4];
numbers.forEach((item,ind,arr3)=>{
    arr3[ind]=item>2;
})
console.log(numbers);

//filter function
let ages=[12,15,18,20];
let adult=ages.filter((age)=>{
    return age>=18;
})
console.log(adult);

//array destructuring
let [x,y,z]=[,,30];
console.log(x);
console.log(y);
console.log(z);
//array spread operator
// let arr4=[1,2,3];
// let arr5=[22,33,44];
// let arr6=[...arr4,...arr5];
// console.log(arr6);

let arr4=[1,2,3];
let [a,b]=[...arr4,10];
console.log(a,b);










