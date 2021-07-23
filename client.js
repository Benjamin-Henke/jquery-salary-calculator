$(document).ready(onReady);

function onReady() {
     $(document).on('click', $('submitButton'), submitButton);

} // end onReady



// registers the Submit Button being pressed 
function submitButton () {
    console.log('Submit Button');
} // end submitButton