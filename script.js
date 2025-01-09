const signUpBtn = document.getElementById("signUpBtn");
const logInBtn = document.getElementById("signInBtn");
const logInBtnMain = document.getElementById("logIn-main");
const logInForm = document.getElementById("logIn");
const signUpForm = document.getElementById("signup");
const mainPage = document.getElementById("mainPage");

signUpBtn.addEventListener("click", function() {
    logInForm.style.display="none";
    signUpForm.style.display="block";
})

logInBtn.addEventListener("click", function() {
    logInForm.style.display="block";
    signUpForm.style.display="none";
})

logInBtnMain.addEventListener("click", function() {
    mainPage.style.display="none";
    logInForm.style.display="block";
})