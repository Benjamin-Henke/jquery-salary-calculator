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
    calcMonthlyCosts ();
} // end submitButton

// take in employee information and stores them in employees array
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
function clearUserInput (){
    // empty inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
  } // end clearUserInput

// calculate monthly costs
// append to DOM
function calcMonthlyCosts() {
    console.log('calcMonthlyCosts');
    
    let totalMonthlyCosts = 0;
    for (let employee of employees) {
        totalMonthlyCosts += Number(employee.annualSalary);
    } // end for of loop

    console.log('Monthly Costs', totalMonthlyCosts);
    $('.inputMonthlyCost').empty();
    $('.inputMonthlyCost').append(totalMonthlyCosts);
    
  } // end calcMonthlyCosts