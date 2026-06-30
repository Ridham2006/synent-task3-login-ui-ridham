const passwordInput = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", () => {

    if(passwordInput.type === "password"){

        passwordInput.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    }else{

        passwordInput.type = "password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});
// const card = document.querySelector(".login-card");

// card.addEventListener("click", (e) => {

//     if(!card.classList.contains("active")){

//         card.classList.add("active");

//     }

// });
const header = document.querySelector(".login-header");

const card = document.querySelector(".login-card");

header.addEventListener("click",()=>{

    card.classList.add("active");

});