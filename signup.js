
const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const contactElement = document.getElementById("contact");
const passwordElement = document.getElementById("password");
const rePasswordElement = document.getElementById("rePassword");
const showPasswordCheckbox = document.getElementById("showPassword");
const roleElement = document.getElementById("role");

const userLocal = JSON.parse(localStorage.getItem("users")) || [];


function togglePasswords() {
    const passwordType = showPasswordCheckbox.checked ? "text" : "password";
    passwordElement.type = passwordType;
    rePasswordElement.type = passwordType;
}


showPasswordCheckbox.addEventListener("change", togglePasswords);


formRegister.addEventListener("submit", function(e) {
    e.preventDefault(); 

    
    if (!userNameElement.value) {
        alert("Tên không được để trống");
        return;
    }

    if (!emailElement.value) {
        alert("Email không được để trống");
        return;
    }

    if (!contactElement.value) {
        alert("Số điện thoại không được để trống");
        return;
    }

    if (!passwordElement.value || !rePasswordElement.value) {
        alert("Mật khẩu không được để trống");
        return;
    }

   
    if (passwordElement.value !== rePasswordElement.value) {
        alert("Mật khẩu không trùng khớp");
        return;
    }

    
    const existingUser = userLocal.find(user => user.email === emailElement.value);
    if (existingUser) {
        alert("Email này đã được đăng ký");
        return;
    }

    
    const newUser = {
        userId: Math.ceil(Math.random() * 1000000000),
        userName: userNameElement.value,
        email: emailElement.value,
        contact: contactElement.value,
        password: passwordElement.value,
        role: roleElement.value
    };

  
    userLocal.push(newUser);

    localStorage.setItem("users", JSON.stringify(userLocal));

    
    alert("Đăng ký thành công!");

    setTimeout(function() {
        window.location.href = "./Login.html";
    }, 1500);
});

