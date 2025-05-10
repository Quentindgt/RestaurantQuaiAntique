const lastName = document.getElementById("lastName");
const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordValid = document.getElementById("passwordValid");


function validateForm(input) {
  input.addEventListener("keyup", function () {
    if ((input.value.length < 3) && (input.value.length >= 0)) {
        input.setCustomValidity("Le champ doit contenir au moins 3 caractères");
        input.reportValidity();
        input.classList.add("isInvalid");
        input.classList.remove("isValid");
    } else {
        input.setCustomValidity("");
        input.classList.add("isValid");
        input.classList.remove("isInvalid");
    }
  });
}


validateForm(lastName);
validateForm(firstName);

function validateEmail() {
  email.addEventListener("keyup", function () {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(email.value)) {
      email.setCustomValidity("");
      email.classList.add("isValid");
      email.classList.remove("isInvalid");
    } else {
      email.setCustomValidity("L'email n'est pas valide");
        email.reportValidity();
      email.classList.add("isInvalid");
      email.classList.remove("isValid");
    }
  });
}

validateEmail();

function validatePassword() {
  password.addEventListener("keyup", function () {
    if (password.value.length < 8) {
      password.setCustomValidity("Le mot de passe doit contenir au moins 8 caractères");
      password.reportValidity();
      password.classList.add("isInvalid");
      password.classList.remove("isValid");
    } else if (!/[A-Z]/.test(password.value)) {
      password.setCustomValidity("Le mot de passe doit contenir au moins une majuscule");
      password.reportValidity();
      password.classList.add("isInvalid");
      password.classList.remove("isValid");
    } else {
      password.setCustomValidity("");
      password.classList.add("isValid");
      password.classList.remove("isInvalid");
    }
  });
}
validatePassword();
function validatePasswordValid() {
  passwordValid.addEventListener("keyup", function () {
    if (passwordValid.value !== password.value) {
      passwordValid.setCustomValidity("Les mots de passe ne correspondent pas");
      passwordValid.reportValidity();
      passwordValid.classList.add("isInvalid");
      passwordValid.classList.remove("isValid");
    } else {
      passwordValid.setCustomValidity("");
      passwordValid.classList.add("isValid");
      passwordValid.classList.remove("isInvalid");
    }
  });
}
validatePasswordValid();