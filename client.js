$(document).ready(onReady);

function onReady() {
    $(document).on('click', '#submitButton', submitButton);
} // end onReady

let employees = [];

// registers the Submit Button being pressed 
function submitButton() {
    console.log('Submit Button');

    // run employeeInput
    employeeInput();

    // run calcMonthlyCosts
    calcMonthlyCosts();

    // run displayEmployees
    displayEmployees();
} // end submitButton


// take in employee information and stores them in employees array
// put into submitButton function
function employeeInput() {
    // take in employee information
    const newEmployeeObj = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        idNumber: $('#idNumberInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    };
    // push to employee array
    employees.push(newEmployeeObj);

    // clear user input
    clearUserInput();

} // end employeeInput

// clears user input from input form
// put into employeeInput function
function clearUserInput() {
    // empty inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
} // end clearUserInput

// calculate monthly costs
// append to DOM
// put into submitButton function
function calcMonthlyCosts() {
    console.log('calcMonthlyCosts');

    let totalMonthlyCosts = 0;
    // calc monthly cost by diving annual salary by 12, rounding to the nearest whole number
    for (let employee of employees) {
        totalMonthlyCosts += Math.round(Number(employee.annualSalary) / 12);
    } // end for of loop

    console.log('Monthly Costs', totalMonthlyCosts);
    $('.inputMonthlyCost').empty();
    $('.inputMonthlyCost').append(totalMonthlyCosts);

} // end calcMonthlyCosts

// displays employee information on DOM
// put into submitButton function
function displayEmployees() {
    console.log('displayEmployees');
} // end displayEmployees