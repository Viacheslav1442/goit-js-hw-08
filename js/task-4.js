const login = document.querySelector(".login-form");
login.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, password } = login.elements;
    const emailTrimed = email.value.trim();
    const passwordTrimed = password.value.trim();
    if (!emailTrimed || !passwordTrimed) {
        alert("All form fields must be filled in");
        return;
    }
    const loginData = {
        email: emailTrimed,
        password: passwordTrimed,
    };
    console.log(loginData);
    login.reset();
});
const btnForCs = login.lastElementChild;
btnForCs.classList.add("btn-login");
// const loginCs = document.querySelectorAll(".login-form");
const loginCs = Array.from(login.children);
loginCs.forEach((item) => {
    item.classList.add("login-items-form");
});
const inputData = Array.from(document.querySelectorAll("input"));
inputData.forEach((elem) => {
    elem.classList.add("input");
});