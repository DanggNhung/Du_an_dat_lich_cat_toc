document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("bookingForm");
    const userNameField = document.getElementById("userName");
    const emailField = document.getElementById("email");
    const confirmationMessage = document.getElementById("confirmation-message");
    const confirmationDiv = document.getElementById("confirmation");
    const okButton = document.getElementById("ok-button");

    // Lấy thông tin user từ localStorage
    const currentUser = JSON.parse(localStorage.getItem("userLogin"));
    if (currentUser) {
        userNameField.value = currentUser.userName; // Tự động điền tên người dùng
        emailField.value = currentUser.email;       // Tự động điền email
    }

    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const service = document.getElementById("service").value;
        const note = document.getElementById("note").value;

        // Kiểm tra xem đã nhập đầy đủ thông tin hay chưa
        if (!date || !time || !service) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        const bookingDetails = {
            userName: userNameField.value,
            email: emailField.value,
            date: date,
            time: time,
            service: service,
            note: note
        };

        // Lấy danh sách lịch hẹn từ localStorage
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        // Thêm lịch hẹn mới vào danh sách
        bookings.push(bookingDetails);

        // Lưu danh sách lịch hẹn vào localStorage
        localStorage.setItem("bookings", JSON.stringify(bookings));

        // Hiển thị thông tin xác nhận
        confirmationMessage.innerHTML = `
            <strong>Tên:</strong> ${bookingDetails.userName}<br>
            <strong>Email:</strong> ${bookingDetails.email}<br>
            <strong>Ngày:</strong> ${bookingDetails.date}<br>
            <strong>Giờ:</strong> ${bookingDetails.time}<br>
            <strong>Dịch vụ:</strong> ${bookingDetails.service}<br>
            <strong>Ghi chú:</strong> ${bookingDetails.note}
        `;
        confirmationDiv.style.display = "block"; // Hiển thị hộp xác nhận

        // Xóa dữ liệu sau khi lưu thành công (nếu cần)
        bookingForm.reset();
    });

    // Đóng hộp xác nhận khi nhấn nút OK
    okButton.addEventListener("click", function() {
        console.log("Nút OK đã được nhấn."); // Thêm ghi nhật ký
        confirmationDiv.style.display = "none"; // Ẩn hộp xác nhận
        setTimeout(() => { // Thêm độ trễ nếu cần
            window.location.href = "../index.html"; // Chuyển đến trang index
        }, 100); // 100ms độ trễ
    });
    
});
