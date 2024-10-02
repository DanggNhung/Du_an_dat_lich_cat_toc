document.addEventListener("DOMContentLoaded", function() {
    // Lấy thông tin người dùng đã đăng nhập từ localStorage
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    const welcomeMessage = document.getElementById("welcome-message");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const logoutBtn = document.getElementById("logoutBtn"); // Nút Đăng xuất

    if (userLogin) {
        // Hiển thị thông điệp chào mừng
        welcomeMessage.style.display = "block";
        welcomeMessage.innerHTML = `Xin chào, ${userLogin.email}! Chào mừng bạn đến với Hair Studio.`;

        // Ẩn nút Đăng Nhập và Đăng Ký
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";

        // Hiển thị nút Đăng xuất
        logoutBtn.style.display = "inline-block";

        // Sự kiện khi nhấn nút Đăng xuất
        logoutBtn.onclick = function() {
            localStorage.removeItem("userLogin"); // Xóa thông tin người dùng khỏi localStorage
            location.reload(); // Tải lại trang
        };
    } else {
        // Ẩn nút Đăng xuất khi chưa đăng nhập
        logoutBtn.style.display = "none";
    }
});

// Sự kiện nút Menu
var menubtn = document.getElementById('menubtn');
var navigation = document.getElementById('navigation');
var menu = document.getElementById('menu');

// Đặt vị trí mặc định của thanh điều hướng
navigation.style.right = "-200px";

// Khi di chuột vào nút menu
menubtn.onmouseover = function() {
    navigation.style.right = "0";
    menu.src = "images/close.png"; 
};

// Khi di chuột ra khỏi nút menu, hoặc menu, menu sẽ thu lại
navigation.onmouseleave = function() {
    navigation.style.right = "-200px";
    menu.src = "images/menu.png"; 
};
