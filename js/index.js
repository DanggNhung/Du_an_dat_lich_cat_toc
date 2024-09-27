var menubtn = document.getElementById('menubtn');
var navigation = document.getElementById('navigation');
var menu = document.getElementById('menu');

navigation.style.right == "-200px";

menubtn.onclick = function() { 
    if(navigation.style.right == "-200px") {
        navigation.style.right = "0";
        menu.src = "images/close.png";
    } else {
        navigation.style.right = "-200px";
        menu.src = "images/menu.png";
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const loggedInUser = JSON.parse(localStorage.getItem("userLogin"));

    if (loggedInUser) {
        // Nếu đã đăng nhập, ẩn các nút "Sign in" và "Sign up"
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("registerBtn").style.display = "none";
    }
});
