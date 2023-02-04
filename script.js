const userPassword = document.getElementById('user-password');
const userPasswordConfirm = document.getElementById('confirm-password');
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const userEmail = document.getElementById('user-email')
const userPhoneNumber = document.getElementById('user-phone-number')
const passwordWarningMsg = document.getElementById('password-warning')
const firstNameWarningMsg = document.getElementById('firstName-warning')
const lastNameWarningMsg = document.getElementById('lastName-warning')
const emailWarningMsg = document.getElementById('email-warning')
const phoneNumberWarningMsg = document.getElementById('number-warning');



firstName.addEventListener('keyup', () => {
  validCheck(firstName,firstNameWarningMsg)
})

lastName.addEventListener('keyup', () => {
  validCheck(lastName,lastNameWarningMsg)
})

userEmail.addEventListener('keyup', () => {
  validCheck(userEmail,emailWarningMsg)
})

userPhoneNumber.addEventListener('keyup', () => {
  validCheck(userPhoneNumber,phoneNumberWarningMsg)
})


userPassword.addEventListener('keyup', () => {
  validCheck(userPassword,passwordWarningMsg)
})

userPasswordConfirm.addEventListener('keyup', () => {
  if( userPassword.value === userPasswordConfirm.value ) {
    passwordWarningMsg.textContent = ''
    userPasswordConfirm.style.border = 'solid green 2px'
    userPassword.style.border = 'solid green 2px'
  } else {
    passwordWarningMsg.textContent = '*Passwords do not match!'
    userPasswordConfirm.style.border = 'solid red 1px'
  }
})



function validCheck(element,warning) {  // Check for valid or invalid input
  warning.textContent = ''
  if(element.value) {
    if(element.matches(':valid')) {
      element.style.border = 'solid green 2px'
      element.style.border = 'solid green 2px'
    } else {
      element.style.border = 'solid red 1px'
    }
  }
}

function emptyInputCheck(element,warning) { // Check for empty inputs
  if(!element.value) {
    element.style.border = 'solid red 1px'
    warning.textContent = '*This field is required!'
  } else {
    warning.textContent = ''
  }
}

function emptyCheck () { // submit btn function

  emptyInputCheck(firstName,firstNameWarningMsg)
  emptyInputCheck(lastName,lastNameWarningMsg)
  emptyInputCheck(userEmail,emailWarningMsg)
  emptyInputCheck(userPhoneNumber,phoneNumberWarningMsg)
  emptyInputCheck(userPassword,passwordWarningMsg)

}