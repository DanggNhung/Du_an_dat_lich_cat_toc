document.addEventListener("DOMContentLoaded", function() {
    const changePasswordForm = document.getElementById("changePasswordForm");
    const currentPasswordInput = document.getElementById("currentPassword");
    const newPasswordInput = document.getElementById("newPassword");
    const confirmNewPasswordInput = document.getElementById("confirmNewPassword");
    const errorMessage = document.getElementById("errorMessage");
    const changePasswordSection = document.getElementById("changePasswordSection");
    const loginMessage = document.getElementById("loginMessage");
    const successBox = document.getElementById("successBox"); 
    const closeSuccess = document.querySelector(".close-success");

    // Lấy thông tin người dùng đã đăng nhập từ localStorage
    const currentUser = JSON.parse(localStorage.getItem("userLogin"));

    if (!currentUser) {
        // Nếu người dùng chưa đăng nhập, hiển thị thông báo yêu cầu đăng nhập
        loginMessage.style.display = "block";
        changePasswordSection.style.display = "none"; // Ẩn form đổi mật khẩu
        return;
    } else {
        // Hiển thị form đổi mật khẩu nếu người dùng đã đăng nhập
        changePasswordSection.style.display = "block";
        loginMessage.style.display = "none";
    }

    // Khi submit form
    changePasswordForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const currentPassword = currentPasswordInput.value;
        const newPassword = newPasswordInput.value;
        const confirmNewPassword = confirmNewPasswordInput.value;

        // Kiểm tra mật khẩu hiện tại
        if (currentPassword !== currentUser.password) {
            errorMessage.textContent = "Mật khẩu hiện tại không chính xác.";
            errorMessage.style.display = "block";
            return;
        }

        // Kiểm tra mật khẩu mới với xác nhận
        if (newPassword !== confirmNewPassword) {
            errorMessage.textContent = "Mật khẩu mới không trùng khớp.";
            errorMessage.style.display = "block";
            return;
        }

        // Cập nhật mật khẩu mới cho người dùng
        currentUser.password = newPassword;  // Sửa từ `userLogin` thành `currentUser`
        localStorage.setItem("userLogin", JSON.stringify(currentUser));  // Lưu lại thông tin vào localStorage

        // Cập nhật mật khẩu mới vào danh sách người dùng
        const userLocal = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = userLocal.findIndex(user => user.email === currentUser.email);
        if (userIndex !== -1) {
            userLocal[userIndex].password = newPassword;
            localStorage.setItem("users", JSON.stringify(userLocal));
        }

        successBox.style.display = 'block';

        // Đóng modal khi nhấn vào dấu "x"
        closeSuccess.addEventListener('click', function () {
            successBox.style.display = 'none';
        });

        // Đóng modal khi nhấn ra ngoài vùng modal
        window.addEventListener('click', function (event) {
            if (event.target === successBox) {
                successBox.style.display = 'none';
            }
        });

        // Chuyển hướng về trang đăng nhập hoặc trang chính
        setTimeout(() => {
            successBox.style.display = 'none'; // Ẩn modal trước khi chuyển hướng
            window.location.href = "./Login.html"; 
        }, 1500);
    });
});


