var studentName = "Rahul";
let maths = 85;
let science = 90;
let english = 75;

const maxMark = 100;
let className = "10th";          
let age = 16;                    
let isPassed = true;             
let remarks;                     
let optionalRemarks = null; 
maths += 5; 
let total = maths + science + english;

let average = total / 3;

let percentage = (total / (maxMark * 3)) * 100;
let mathsPass = maths >= 40;

let sciencePass = science >= 40;

let englishPass = english >= 40;

let averagePass = average >= 50;
let allPassed = mathsPass && sciencePass && englishPass;
let outstanding = maths > 90 || science > 90 || english > 90;
let failed = !allPassed;
isPassed = allPassed;
console.log("Student Name:", studentName);
console.log("Class:", className);
console.log("Age:", age);

console.log("Mathematics:", maths);
console.log("Science:", science);
console.log("English:", english);

console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Percentage:", percentage);

console.log("All Subjects Passed:", allPassed);
console.log("Final Result:", allPassed ? "PASS" : "FAIL");
console.log("Outstanding Score:", outstanding);