const userPassword = document.getElementById('user-password');
const userPasswordConfirm = document.getElementById('confirm-password');
const passwordWarningMsg = document.getElementById('password-warning')


function passwordChecker () {

  if(userPassword.value) {
    if( userPassword.value === userPasswordConfirm.value ) {
      passwordWarningMsg.textContent = ''
    } else {
      passwordWarningMsg.textContent = '*Passwords do not match!'
    }
  } else {
    passwordWarningMsg.textContent = '*Please enter your password'
  }
}