const password = document.getElementById("password");
const showBtn = document.getElementById("show-pass");

const showHidePassword = () => {
    if(password.type == "password"){
       password.type = "text";
       showBtn.classList.add("fa-lock-open");
    }else{
       password.type = "password";
       showBtn.classList.remove("fa-lock-open");
    }
};
showBtn.addEventListener("click", showHidePassword);