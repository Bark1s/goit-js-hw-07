const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const loginForm = event.target;
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    } else {
        const userInfo = {
            email: loginForm.elements.email.value.trim(),
            password: loginForm.elements.password.value.trim(),
        }
        console.log(userInfo);
        form.reset();

}
}




