
// assigns id's to variables
var login = document.querySelector('#username');
var pass = document.querySelector('#pass');
var pass2 = document.querySelector('#pass2');
var terms = document.querySelector('#terms');
var resetButton = document.querySelector('#resetbtn');
var errorMsg = document.querySelector('#err_msg');

let flag = true;

/**
 * This function calls other validate methods in order to be returned by "onsubmit" in HTML
 * @returns flag
 */
function validate() {
    flag = true;
    validateUsername();
    validatePass1();
    validatePass2();
    validateTerms();
    return flag;
}


/**
 * click event with anonymous  function, clear error messages when clicking on reset button
 * also set the button border color back to default
 */
resetButton.addEventListener('click', function () {
    // loop over to set all small element with no value
    document.querySelectorAll('small').forEach(element => {
        element.innerText = '';
        // loop over to make border color like default
        document.querySelectorAll('input').forEach(element => {
            element.style.border = "1px solid #343434";
        });
    });
    errorMsg.textContent = " ";
});


/**
 * shows error message
 * @param {*} input 
 * @param {*} message 
 */
function showError(input, message) {
    const textField = input.parentElement;
    const small = textField.querySelector('small');
    textField.querySelector('input').style.border = "2px solid red";
    small.innerText = message;
}

/**
 * shows success message
 * @param {*} input 
 * @param {*} message 
 */
function showSuccess(input, message) {
    const textField = input.parentElement;
    const small = textField.querySelector('small');
    textField.querySelector('input').style.border = "2px solid green";
    small.innerText = message;
}


/**
 * password validation format - at least one lowercase required
 * @param {*} pass 
 * @returns 
 */
function isPasswordUpper(pass) {
    const regex = /[A-Z]/;
    return regex.test(pass);
}

/**
 * password validation format - at least one uppercase required
 * @param {*} pass 
 * @returns 
 */
function isPasswordLower(pass) {
    const regex = /[a-z]/;
    return regex.test(pass);
}

/**
 * Username validation check
 */
function validateUsername() {
    if (login.value === '') {
        showError(login, 'Username is required');
        flag = false;
    } else if (login.value.length > 20) {
        showError(login, 'Username must be less than 20 characters');
        flag = false;
    } else if (login.value.length < 6) {
        showError(login, 'Username must be more than 6 characters');
    } else {
        showSuccess(login, '');
    }
}

/**
 * initial password validation check
 */
function validatePass1() {
    if (pass.value === '') {
        showError(pass, 'Password is required');
        flag = false;
    } else if (!(isPasswordUpper(pass.value))) {
        showError(pass, 'Password must contain at least one uppercase letter');
        flag = false;
    } else if (!(isPasswordLower(pass.value))) {
        showError(pass, 'Password must contain at least one lowercase letter');
        flag = false;
    } else if (pass.value.length < 6) {
        showError(pass, 'Username must be more than 6 characters');
        flag = false;
    } else {
        showSuccess(pass, '')
    }
}

/**
 * re-type password validation check
 */
function validatePass2() {
    if (pass2.value === '') {
        showError(pass2, 'Retype your password');
        flag = false;
    } else if (pass.value !== pass2.value) {
        showError(pass2, 'Password does not match');
        flag = false;
    } else {
        showSuccess(pass2, '')
    }
}

/**
 * terms and conditions validation check
 */
function validateTerms() {
    if (!terms.checked) {
        showError(terms, 'Please agree to the terms and conditions');
        flag = false;
    } else {
        showSuccess(terms, '')
    }
}
