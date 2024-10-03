// Lấy các phần tử từ DOM
const loginForm = document.getElementById("login-form");
const emailElement = document.getElementById("login-email");
const passwordElement = document.getElementById("password"); // Sửa ID để khớp với HTML
const errorElement = document.getElementById("Error");

// Xử lý sự kiện submit của form
loginForm.addEventListener("submit", function(e) {
    // Ngăn chặn sự kiện load lại trang
    e.preventDefault();

    // Validate dữ liệu đầu vào
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm kiếm người dùng từ dữ liệu lưu trữ
    const findUser = userLocal.find(
        (user) =>
            user.email === emailElement.value && 
            user.password === passwordElement.value
    );

    if (!findUser) {
        // Nếu không tìm thấy người dùng, hiển thị thông báo lỗi
        errorElement.style.display = "block";
    } else {
        // Nếu tìm thấy người dùng, lưu thông tin đăng nhập vào localStorage
        localStorage.setItem("userLogin", JSON.stringify(findUser));
        
        // Chuyển hướng đến trang chính sau khi đăng nhập thành công
        window.location.href = "index.html";
    }
});

// Hàm toggle hiển thị mật khẩu
function togglePassword() {
    var passwordInput = document.getElementById("password");
    var togglePassword = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈"; 
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁️"; 
    }
}
