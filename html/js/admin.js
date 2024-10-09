document.addEventListener("DOMContentLoaded", function() {
    const bookingTableBody = document.getElementById("bookingTableBody");
    const confirmationMessage = document.getElementById("confirmation-message");
    const confirmationDiv = document.getElementById("confirmation");
    const confirmDeleteButton = document.getElementById("confirmDelete");
    const cancelDeleteButton = document.getElementById("cancelDelete");
    const searchEmailField = document.getElementById("searchEmail"); // Lấy ô nhập email
    const searchButton = document.getElementById("searchButton");

    // Lấy danh sách lịch hẹn từ localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    let filteredBookings = [...bookings]; // Khởi tạo danh sách đã lọc

    // Hàm hiển thị danh sách lịch hẹn
    function displayBookings(bookingsToDisplay) {
        bookingTableBody.innerHTML = ""; // Xóa nội dung cũ
        bookingsToDisplay.forEach((booking, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${booking.userName}</td>
                <td>${booking.email}</td>
                <td>${booking.date}</td>
                <td>${booking.time}</td>
                <td>${booking.service}</td>
                <td>${booking.note || "Không có ghi chú"}</td>
                <td>
                    <button class="delete-button" data-index="${index}">Xóa</button>
                </td>
            `;
            bookingTableBody.appendChild(row);
        });
    }

    // Hiển thị danh sách lịch hẹn khi trang được tải
    displayBookings(bookings);

    // Xử lý sự kiện click cho nút tìm kiếm
    searchButton.addEventListener("click", function() {
        const searchEmail = searchEmailField.value.trim().toLowerCase(); // Lấy giá trị email đã nhập và chuyển về chữ thường
        filteredBookings = bookings.filter(booking => booking.email.toLowerCase().includes(searchEmail)); // Lọc lịch hẹn theo email
        displayBookings(filteredBookings); // Hiển thị lịch hẹn đã lọc
    });

    // Xử lý sự kiện click cho nút xóa
    bookingTableBody.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete-button")) {
            const index = e.target.getAttribute("data-index");
            const bookingToDelete = filteredBookings[index]; // Lấy booking từ danh sách đã lọc
            confirmationMessage.innerHTML = `Bạn có chắc chắn muốn xóa lịch hẹn của ${bookingToDelete.userName} không?`;
            confirmationDiv.style.display = "block"; // Hiện hộp xác nhận
            confirmationDiv.setAttribute("data-index", index); // Lưu chỉ số để xóa sau
        }
    });

    // Xác nhận xóa lịch hẹn
    confirmDeleteButton.addEventListener("click", function() {
        const index = confirmationDiv.getAttribute("data-index");
        const bookingToDelete = filteredBookings[index]; // Lấy booking từ danh sách đã lọc
        const originalIndex = bookings.indexOf(bookingToDelete); // Tìm chỉ số trong danh sách gốc
        bookings.splice(originalIndex, 1); // Xóa lịch hẹn từ danh sách gốc
        localStorage.setItem("bookings", JSON.stringify(bookings)); // Lưu lại vào localStorage
        confirmationDiv.style.display = "none"; // Ẩn hộp xác nhận
        displayBookings(bookings); // Cập nhật danh sách
    });

    // Hủy bỏ xóa
    cancelDeleteButton.addEventListener("click", function() {
        confirmationDiv.style.display = "none"; // Ẩn hộp xác nhận
    });
});
