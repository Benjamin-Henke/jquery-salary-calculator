$(document).ready(onReady);

function onReady() {
    $(document).on('click', '#submitButton', submitButton);
} // end onReady

// global variable to remember employees
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
// placed in submitButton function
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
// placed in employeeInput function
function clearUserInput() {
    // empty inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');

    // put cursor back to first name input field
    $('#firstNameInput').focus();
} // end clearUserInput

// calculate monthly costs and append to DOM
// placed in submitButton function
// TO FIX -> background turns read when monthly cost on first click -> Maybe separate function?
function calcMonthlyCosts() {
    console.log('calcMonthlyCosts');

    let totalMonthlyCosts = 0;
    // calc monthly cost by diving annual salary by 12, rounding to the nearest whole number
    for (let employee of employees) {
        totalMonthlyCosts += Math.round(Number(employee.annualSalary) / 12);
           // check to see if monthly cost exceeds 20k
        if (totalMonthlyCosts >= 20000) {
            $('.inputMonthlyCost').css('background-color', 'red');
        } // end if statement
    } // end for of loop

    console.log('Monthly Costs', totalMonthlyCosts);
    $('.inputMonthlyCost').text(totalMonthlyCosts);
} // end calcMonthlyCosts


// displays employee information on DOM
// placed in submitButton function
function displayEmployees() {
    console.log('employeeTable');
    let employeeTable = $('.employeeTable')

    employeeTable.empty();

    for (let employee of employees) {
        employeeTable.append(`
            <tr>
                <td> ${employee.firstName} </td>
                <td> ${employee.lastName} </td>
                <td> ${employee.idNumber} </td>
                <td> ${employee.jobTitle} </td>
                <td> ${employee.annualSalary} </td>
                <td><button>Delete</button></td>
            </tr>
        `); // end displayEmployees.append 
    } // end of loop
} // end displayEmployees