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
        // Hiển thị lỗi nếu không tìm thấy người dùng
        errorElement.style.display = "block";
    } else {
        // Đăng nhập thành công, chuyển hướng và lưu thông tin người dùng
        window.location.href = "index.html";
        localStorage.setItem("userLogin", JSON.stringify(findUser));
    }
});

function togglePassword() {
    var passwordInput = document.getElementById("password");
    var togglePassword = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈"; // Thay đổi biểu tượng mắt
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁️"; // Thay đổi biểu tượng mắt
    }
}
