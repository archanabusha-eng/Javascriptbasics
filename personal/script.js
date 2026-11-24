var personName = "Archana";

let monthlyIncome = 50000;

const currentMonth = new Date().toLocaleString("en-US", {
    month: "long"
});

let isOverspending = false;




const expenses = [

    { category: "House Rent", amount: 12000 },

    { category: "Food", amount: 6000 },

    { category: "Transportation", amount: 2500 },

    { category: "Electricity", amount: 1500 },

    { category: "Entertainment", amount: 3000 },

    { category: "Shopping", amount: 4000 }

];




function calculateTotalExpenses() {

    let total = 0;

    for (let expense of expenses) {

        total = total + expense.amount;

    }

    return total;

}




function calculateBalance() {

    let total = calculateTotalExpenses();

    return monthlyIncome - total;

}




function calculateAverage() {

    let total = calculateTotalExpenses();

    return total / expenses.length;

}




function findHighestLowest() {

    let highest = expenses[0];
    let lowest = expenses[0];

    for (let expense of expenses) {

        if (expense.amount > highest.amount) {

            highest = expense;

        }

        if (expense.amount < lowest.amount) {

            lowest = expense;

        }

    }

    return {
        highest: highest,
        lowest: lowest
    };

}




function calculatePercentage() {

    let total = calculateTotalExpenses();

    return (total / monthlyIncome) * 100;

}




let balance = calculateBalance();

let financialStatus = "";

if (balance > 10000) {

    financialStatus = "Good Savings";

}
else if (balance > 0) {

    financialStatus = "Moderate Savings";

}
else if (balance === 0) {

    financialStatus = "No Savings";

}
else {

    financialStatus = "Overspending";

}

if (balance < 0) {

    isOverspending = true;

}
else {

    isOverspending = false;

}





document.getElementById("heading").textContent =
    "Monthly Expense Dashboard";



document.getElementById("personName").textContent =
    "Name: " + personName;




document.getElementById("month").textContent =
    "Month: " + currentMonth;




document.getElementById("income").textContent =
    "Monthly Income: Rs." + monthlyIncome;




let totalExpenses = calculateTotalExpenses();

document.getElementById("totalExpense").textContent =
    "Total Monthly Expenses: Rs." + totalExpenses;




let balanceSection = document.querySelector(".balance-section");

balanceSection.innerHTML =
    "<h3>Remaining Balance</h3>" +
    "<p id='balance'>Rs." + balance + "</p>";




let expenseTable = document.getElementById("expenseTable");

let tableContent = "";

for (let expense of expenses) {

    tableContent +=
        "<tr>" +
        "<td class='expense-category'>" + expense.category + "</td>" +
        "<td>Rs." + expense.amount + "</td>" +
        "</tr>";

}

expenseTable.innerHTML = tableContent;




let categories = document.getElementsByClassName("expense-category");

for (let i = 0; i < categories.length; i++) {

    categories[i].style.color = "blue";

}




let result = findHighestLowest();

document.getElementById("highest").textContent =
    "Highest Expense: " + result.highest.category +
    " - Rs." + result.highest.amount;

document.getElementById("lowest").textContent =
    "Lowest Expense: " + result.lowest.category +
    " - Rs." + result.lowest.amount;




document.getElementById("categoryCount").textContent =
    "Total Expense Categories: " + expenses.length;




document.getElementById("percentage").textContent =
    "Income Spent: " + calculatePercentage().toFixed(2) + "%";




document.getElementById("average").textContent =
    "Average Expense: Rs." + calculateAverage().toFixed(2);




document.getElementById("status").textContent =
    "Financial Status: " + financialStatus;




let statusValue = document.getElementById("status").innerText;

document.getElementById("statusDisplay").innerText =
    statusValue;




document.getElementById("header").style.backgroundColor = "#385b83";




document.getElementById("totalExpense").style.fontSize = "22px";




let balanceText = document.getElementById("balance");

if (balance > 0) {

    balanceText.style.color = "green";

}
else {

    balanceText.style.color = "red";

}




for (let i = 0; i < expenses.length; i++) {

    if (expenses[i].category === result.highest.category) {

        categories[i].style.backgroundColor = "#ffe0b2";

        categories[i].style.fontWeight = "bold";

    }

}




if (isOverspending) {

    document.getElementById("status").style.color = "red";

}
else {

    document.getElementById("status").style.color = "green";

}