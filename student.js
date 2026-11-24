const students = [
    {
        studentId: 101,
        name: "Anu",
        age: 20,
        department: "CSE",
        english: 95,
        mathematics: 92,
        science: 88
    },
    {
        studentId: 102,
        name: "Rahul",
        age: 21,
        department: "ECE",
        english: 75,
        mathematics: 82,
        science: 78
    },
    {
        studentId: 103,
        name: "Meera",
        age: 20,
        department: "CSE",
        english: 65,
        mathematics: 55,
        science: 72
    },
    {
        studentId: 104,
        name: "Arun",
        age: 22,
        department: "ECE",
        english: 35,
        mathematics: 45,
        science: 50
    },
    {
        studentId: 105,
        name: "Neha",
        age: 21,
        department: "IT",
        english: 90,
        mathematics: 96,
        science: 94
    }
];




function displayStudentDetails(student) {
    console.log("Student ID:", student.studentId);
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Department:", student.department);
    console.log("English:", student.english);
    console.log("Mathematics:", student.mathematics);
    console.log("Science:", student.science);
}




function calculateTotal(student) {
    return student.english +
           student.mathematics +
           student.science;
}




function calculateAverage(student) {
    return calculateTotal(student) / 3;
}

function calculateGrade(average) {
    if (average >= 90) {
        return "A+";
    }
    else if (average >= 80) {
        return "A";
    }
    else if (average >= 70) {
        return "B";
    }
    else if (average >= 60) {
        return "C";
    }
    else if (average >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}



function checkResult(student) {
    if (
        student.english >= 40 &&
        student.mathematics >= 40 &&
        student.science >= 40
    ) {
        return true;
    }
    else {
        return false;
    }
}




function findTopper() {
    let topper = students[0];

    for (let i = 1; i < students.length; i++) {
        if (calculateTotal(students[i]) >
            calculateTotal(topper)) {
            topper = students[i];
        }
    }

    console.log("\n--- TOPPER DETAILS ---");
    console.log("Name:", topper.name);
    console.log("Total Marks:", calculateTotal(topper));
}
function displayFailedStudents() {
    console.log("\n-FAILED STUDENTS");

    let found = false;

    for (let student of students) {
        if (checkResult(student) === false) {
            console.log(student.name);
            found = true;
        }
    }

    if (found === false) {
        console.log("All students have passed.");
    }
}
function filterByDepartment(departmentName) {
    console.log("\n--- DEPARTMENT:", departmentName, "---");

    let found = false;

    for (let student of students) {
        if (student.department === departmentName) {
            console.log(
                "Name:", student.name,
                "| ID:", student.studentId
            );
            found = true;
        }
    }

    if (found === false) {
        console.log("No students found in this department.");
    }
}


function generateReport() {
    console.log("\n----- STUDENT PERFORMANCE REPORT ------");

    for (let student of students) {

        let total = calculateTotal(student);
        let average = calculateAverage(student);
        let grade = calculateGrade(average);
        let result = checkResult(student);

        console.log("\n----");

        console.log("Student ID:", student.studentId);
        console.log("Student Name:", student.name);
        console.log("Total Marks:", total);
        console.log("Average Marks:", average.toFixed(2));
        console.log("Grade:", grade);

        
        console.log("Pass/Fail Boolean:", result);

        if (result === true) {
            console.log("Result: PASS");
        }
        else {
            console.log("Result: FAIL");
        }
    }

}


console.log("======= ALL STUDENT DETAILS =======");

for (let student of students) {
   
    displayStudentDetails(student);

    console.log("Total Marks:", calculateTotal(student));
    console.log("Average Marks:", calculateAverage(student).toFixed(2));
    console.log("Grade:", calculateGrade(calculateAverage(student)));

    console.log("Pass Status:", checkResult(student));
}



findTopper();


displayFailedStudents();

filterByDepartment("CSE");

generateReport();


