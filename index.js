document.addEventListener("DOMContentLoaded", function() {
    // Lấy thông tin người dùng đã đăng nhập từ localStorage
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    const welcomeMessage = document.getElementById("welcome-message");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const logoutBtn = document.getElementById("logoutBtn"); // Nút Đăng xuất
    const changePasswordLink = document.getElementById("changePasswordLink");
    const checkingBookingLink = document.getElementById("checkingBookingLink");
    const bookingLink = document.querySelector("a[href='./html/Datlich.html']"); // Link Booking
    const shopLink = document.querySelector("a[href='./html/DatHang.html']"); // Link Shop

    if (userLogin) {
        // Hiển thị thông điệp chào mừng
        welcomeMessage.style.display = "block";
        welcomeMessage.innerHTML = `Xin chào, ${userLogin.email}! Chào mừng bạn đến với Hair Studio.`;

        // Ẩn nút Đăng Nhập và Đăng Ký
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";

        // Hiển thị nút Đăng xuất
        logoutBtn.style.display = "inline-block";

        // Hiển thị link đổi mật khẩu và kiểm tra lịch hẹn
        changePasswordLink.style.display = "inline-block"; 
        checkingBookingLink.style.display = "inline-block";

        // Sự kiện khi nhấn nút Đăng xuất
        logoutBtn.onclick = function() {
            localStorage.removeItem("userLogin"); // Xóa thông tin người dùng khỏi localStorage
            location.reload(); // Tải lại trang
        };

        // Khi người dùng nhấn vào "Đổi mật khẩu"
        changePasswordLink.onclick = function() {
            location.href = "./html/DoiMatKhau.html"; // Chuyển hướng đến trang đổi mật khẩu
        };

    } else {
        // Ẩn nút Đăng xuất và link đổi mật khẩu khi chưa đăng nhập
        logoutBtn.style.display = "none";
        changePasswordLink.style.display = "none";
        checkingBookingLink.style.display = "none";
        
        // Chặn sự kiện khi nhấn vào Booking nếu chưa đăng nhập
        bookingLink.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn chuyển hướng mặc định
            alert('Bạn cần phải đăng nhập để đặt lịch!'); // Hiển thị thông báo
        });

        // Chặn sự kiện khi nhấn vào Shop nếu chưa đăng nhập
        shopLink.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn chuyển hướng mặc định
            alert('Bạn cần phải đăng nhập để mua hàng!'); // Hiển thị thông báo
        });
    }

    // Sự kiện khi người dùng nhấn vào Booking nếu đã đăng nhập
    if (userLogin) {
        bookingLink.addEventListener('click', function() {
            location.href = "./html/Datlich.html"; // Chuyển hướng đến trang Booking
        });

        shopLink.addEventListener('click', function() {
            location.href = "./html/DatHang.html"; // Chuyển hướng đến trang Shop
        });
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
