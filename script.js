const userPassword = document.getElementById('user-password');
const userPasswordConfirm = document.getElementById('confirm-password');
const passwordWarningMsg = document.getElementById('password-warning')



function passwordChecker () {
  if(userPassword.value === userPasswordConfirm.value ) {
    console.log('passwords are same');
  } else {
    passwordWarningMsg.textContent = '*Passwords do not match!'
  }
}