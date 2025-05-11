const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const emailError = document.getElementById("emailError");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (!emailInput.value) {
        alert("Email is required.");
        return;
    }
    if (!passwordInput.value) {
        alert("Password is required.");
        return;
    }

    if ((emailInput.value == "quentin_dugat@hotmail.com") && (passwordInput.value == "Quejeateselo.0192")) {
        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        setToken(token);
        setCookie(roleCookieName, "client", 7);
        window.location.replace("accueil.html");
    } else {
        alert("Email or password is incorrect.");
        emailError.style.display = "block";
    }
});