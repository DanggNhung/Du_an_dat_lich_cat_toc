
var menubtn = document.getElementById('menubtn');
var navigation = document.getElementById('navigation');
var menu = document.getElementById('menu');

// Đặt vị trí mặc định của thanh điều hướng
navigation.style.right = "-200px";

menubtn.onclick = function() { 
    if (navigation.style.right === "-200px") {
        navigation.style.right = "0";
        menu.src = "images/close.png";
    } else {
        navigation.style.right = "-200px";
        menu.src = "images/menu.png";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Lấy thông tin người dùng đã đăng nhập từ localStorage
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    const welcomeMessage = document.getElementById("welcome-message");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    if (userLogin) {
        // Hiển thị thông điệp chào mừng
        welcomeMessage.style.display = "block";
        welcomeMessage.innerHTML = `Xin chào, ${userLogin.email}! Chào mừng bạn đến với Hair Studio.`;

        // Ẩn nút Đăng Nhập và Đăng Ký
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";
    }
});

