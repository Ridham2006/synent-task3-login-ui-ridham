const passwordInput = document.getElementById("password");
const toggleIcons = document.querySelectorAll(".toggle-password");

toggleIcons.forEach((icon) => {

    icon.addEventListener("click", () => {

        const input = icon.previousElementSibling;

        if (input.type === "password") {

            input.type = "text";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

        }

    });

});
const header = document.querySelector(".login-header");

const card = document.querySelector(".login-card");

header.addEventListener("click",()=>{

    card.classList.add("active");

});