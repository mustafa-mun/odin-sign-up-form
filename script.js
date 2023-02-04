const userPassword = document.getElementById('user-password');
const userPasswordConfirm = document.getElementById('confirm-password');
const passwordWarningMsg = document.getElementById('password-warning')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const userEmail = document.getElementById('user-email')
const userPhoneNumber = document.getElementById('user-phone-number')

function passwordChecker () {

  if(userPassword.value) {
    if( userPassword.value === userPasswordConfirm.value ) {
      passwordWarningMsg.textContent = ''
      userPasswordConfirm.style.border = 'solid #d8d9dd 2px'
      userPassword.style.border = 'solid #d8d9dd 2px'
    } else {
      passwordWarningMsg.textContent = '*Passwords do not match!'
      userPassword.style.border = 'solid red 1px'
      userPasswordConfirm.style.border = 'solid red 1px'
    }
  } else {
    passwordWarningMsg.textContent = '*Please enter your password'
    userPassword.style.border = 'solid red 1px'
    userPasswordConfirm.style.border = 'solid red 1px'
  }

}


firstName.addEventListener('keyup', () => {
  validCheck(firstName)
})

lastName.addEventListener('keyup', () => {
  validCheck(lastName)
})

userEmail.addEventListener('keyup', () => {
  validCheck(userEmail)
})

userPhoneNumber.addEventListener('keyup', () => {
  validCheck(userPhoneNumber)
})


userPassword.addEventListener('keyup', (e) => {
  validCheck(userPassword)
})

userPasswordConfirm.addEventListener('keyup', () => {
  if( userPassword.value === userPasswordConfirm.value ) {
    passwordWarningMsg.textContent = ''
    userPasswordConfirm.style.border = 'solid green 2px'
    userPassword.style.border = 'solid green 2px'
  } else {
    passwordWarningMsg.textContent = '*Passwords do not match!'
    userPasswordConfirm.style.border = 'solid red'
  }
})



function validCheck(element) {
  if(element.value) {
    if(element.matches(':valid')) {
      element.style.border = 'solid green 2px'
      element.style.border = 'solid green 2px'
    } else {
      element.style.border = 'solid red'
    }
  }
}