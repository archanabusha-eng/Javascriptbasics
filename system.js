

let users = [
    {
        userId: 101,
        name: "Anu",
        monthlyIncome: 50000,
        savingsGoal: 15000,
        expenses: [
            { expenseId: 1, category: "Rent", amount: 12000, paymentMode: "UPI" },
            { expenseId: 2, category: "Food", amount: 5000, paymentMode: "UPI" },
            { expenseId: 3, category: "Transportation", amount: 3000, paymentMode: "Cash" },
            { expenseId: 4, category: "Shopping", amount: 8000, paymentMode: "Debit Card" }
        ]
    },
    {
        userId: 102,
        name: "Rahul",
        monthlyIncome: 40000,
        savingsGoal: 10000,
        expenses: [
            { expenseId: 5, category: "Rent", amount: 10000, paymentMode: "UPI" },
            { expenseId: 6, category: "Food", amount: 6000, paymentMode: "Cash" },
            { expenseId: 7, category: "Entertainment", amount: 5000, paymentMode: "Credit Card" },
            { expenseId: 8, category: "Transportation", amount: 3000, paymentMode: "UPI" }
        ]
    },
    {
        userId: 103,
        name: "Meera",
        monthlyIncome: 60000,
        savingsGoal: 20000,
        expenses: [
            { expenseId: 9, category: "Rent", amount: 15000, paymentMode: "UPI" },
            { expenseId: 10, category: "Food", amount: 7000, paymentMode: "UPI" },
            { expenseId: 11, category: "Healthcare", amount: 4000, paymentMode: "Debit Card" },
            { expenseId: 12, category: "Shopping", amount: 9000, paymentMode: "Credit Card" }
        ]
    },
    {
        userId: 104,
        name: "Arun",
        monthlyIncome: 35000,
        savingsGoal: 12000,
        expenses: [
            { expenseId: 13, category: "Rent", amount: 10000, paymentMode: "UPI" },
            { expenseId: 14, category: "Food", amount: 5000, paymentMode: "Cash" },
            { expenseId: 15, category: "Shopping", amount: 8000, paymentMode: "Credit Card" },
            { expenseId: 16, category: "Entertainment", amount: 4000, paymentMode: "UPI" }
        ]
    },
    {
        userId: 105,
        name: "Neha",
        monthlyIncome: 75000,
        savingsGoal: 25000,
        expenses: [
            { expenseId: 17, category: "Rent", amount: 18000, paymentMode: "UPI" },
            { expenseId: 18, category: "Food", amount: 8000, paymentMode: "UPI" },
            { expenseId: 19, category: "Transportation", amount: 4000, paymentMode: "Cash" },
            { expenseId: 20, category: "Shopping", amount: 10000, paymentMode: "Debit Card" }
        ]
    }
];

let userName = "Anu";
let income = 50000;
let goalAchieved = true;
let optionalDetail;
let financialDetail = null;

function displayExpenses(user) {
    console.log("\nExpenses of:", user.name);

    for (let expense of user.expenses) {
        console.log("Expense ID:", expense.expenseId);
        console.log("Category:", expense.category);
        console.log("Amount:", expense.amount);
        console.log("Payment Mode:", expense.paymentMode);
    }
}


function calculateTotalExpenses(user) {
    let total = 0;

    for (let expense of user.expenses) {
        total = total + expense.amount;
    }

    return total;}

function calculateSavings(user) {
    return user.monthlyIncome - calculateTotalExpenses(user);
}


function checkSavingsGoal(user) {
    let savings = calculateSavings(user);
    let achieved = savings >= user.savingsGoal;

    if (savings < 0) {
        console.log("Overspending Alert");
    }
    else if (achieved) {
        console.log("Savings Goal Achieved");
    }
    else {
        console.log("Savings Goal Not Achieved");
    }

    return achieved;
}


function findHighestExpenseCategory(user) {
    let categoryTotals = {};

    for (let expense of user.expenses) {
        if (categoryTotals[expense.category] === undefined) {
            categoryTotals[expense.category] = expense.amount;
        }
        else {
            categoryTotals[expense.category] += expense.amount;
        }
    }

    let highestCategory = "";
    let highestAmount = 0;

    for (let category in categoryTotals) {
        if (categoryTotals[category] > highestAmount) {
            highestAmount = categoryTotals[category];
            highestCategory = category;
        }
    }

    return highestCategory;
}


function identifyHighSpendingUsers() {
    let found = false;

    console.log("\nHigh-Spending Users:");

    for (let user of users) {
        let total = calculateTotalExpenses(user);
        let percentage = (total / user.monthlyIncome) * 100;

        if (percentage > 70) {
            console.log(user.name);
            console.log("Expense Percentage:", percentage.toFixed(2) + "%");
            found = true;
        }
    }

    if (!found) {
        console.log("No high-spending users found.");
    }
}


function filterExpensesByCategory(user, category) {
    let total = 0;
    let found = false;

    console.log("\nCategory:", category);
    console.log("User:", user.name);

    for (let expense of user.expenses) {
        if (expense.category.toLowerCase() === category.toLowerCase()) {
            console.log("Expense ID:", expense.expenseId);
            console.log("Amount:", expense.amount);

            total += expense.amount;
            found = true;
        }
    }

    if (found) {
        console.log("Total Amount:", total);
    }
    else {
        console.log("No expenses found in this category.");
    }
}




function generateFinancialReport() {
    console.log("\n== PERSONAL FINANCE REPORT ===");

    for (let user of users) {
        let total = calculateTotalExpenses(user);
        let savings = calculateSavings(user);
        let percentage = (total / user.monthlyIncome) * 100;
        let goalStatus = checkSavingsGoal(user);
        let highestCategory = findHighestExpenseCategory(user);

        console.log("\nUser ID:", user.userId);
        console.log("Name:", user.name);
        console.log("Monthly Income:", user.monthlyIncome);
        console.log("Total Expenses:", total);
        console.log("Remaining Savings:", savings);
        console.log("Expense Percentage:", percentage.toFixed(2) + "%");
        console.log("Savings Goal Status:", goalStatus);
        console.log("Highest Expense Category:", highestCategory);
        console.log("Savings Goal:", user.savingsGoal);
        console.log("----------");
    }
}



for (let user of users) {
    displayExpenses(user);
    console.log("Total Monthly Expenses:", calculateTotalExpenses(user));
    console.log("Monthly Savings:", calculateSavings(user));
}

identifyHighSpendingUsers();

filterExpensesByCategory(users[0], "Food");

generateFinancialReport();