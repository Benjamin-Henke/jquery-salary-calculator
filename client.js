$(document).ready(onReady);

function onReady() {
    $(document).on('click', '#submitButton', submitButton);

} // end onReady

let employee = [];

// registers the Submit Button being pressed 
function submitButton() {
    console.log('Submit Button');

    // run employeeInput
    employeeInput();
} // end submitButton

// Need a function to take in employee data
// push user input to a table or list?
function employeeInput() {
    // take in employee information
    $('#firstNameInput').val();
    $('#lastNameInput').val();
    $('#idNumberInput').val();
    $('#jobTitleInput').val();
    $('#annualSalaryInput').val();
    // push to employee array

    // clear user input
    clearUserInput();

} // end employeeInput

function clearUserInput (){
    // empty inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
  } // end clearUserInput