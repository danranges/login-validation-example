const loginForm = document.querySelector('[data-login-form]');

document.querySelector('[data-submit-button]').addEventListener('click', (e) => {
  e.preventDefault();
  dataValidate(loginForm);
});

function dataValidate(form) {
  let emailCheck = false;
  let countryCheck = false;
  let zipCodeCheck = false;
  let passwordCheck = false;

  emailCheck = validateEmail(form.elements[0].value);
  countryCheck = validateCountry(form.elements[1].value);
  zipCodeCheck = validateZipCode(form.elements[2].value);
  passwordCheck = validatePassword(form.elements[3].value, form.elements[4].value);

  console.log(emailCheck, countryCheck, zipCodeCheck, passwordCheck);

  if (emailCheck && countryCheck && zipCodeCheck && passwordCheck) {
    window.location.reload(true);
  }
}

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  if (re.test(email)) return true;
  document.getElementById('email-error').textContent = 'Please enter a valid email address';
}

function validateCountry(country) {
  if (country) return true;
  document.getElementById('country-error').textContent = 'Please enter your country';
}

function validateZipCode(zipCode) {
  if (zipCode) return true;
  document.getElementById('zip-error').textContent = 'Please enter your zip code';
}

function validatePassword(password, passwordConfirm) {
  if (password && password === passwordConfirm) return true;
  document.getElementById('password-error').textContent = 'Please make sure your passwords match';
}
