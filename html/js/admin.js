document.addEventListener("DOMContentLoaded", function() {
    const bookingTableBody = document.getElementById("bookingTableBody");
    const confirmationMessage = document.getElementById("confirmation-message");
    const confirmationDiv = document.getElementById("confirmation");
    const confirmDeleteButton = document.getElementById("confirmDelete");
    const cancelDeleteButton = document.getElementById("cancelDelete");

    // Lấy danh sách lịch hẹn từ localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Hàm hiển thị danh sách lịch hẹn
    function displayBookings() {
        bookingTableBody.innerHTML = ""; // Xóa nội dung cũ
        bookings.forEach((booking, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${booking.userName}</td>
                <td>${booking.email}</td>
                <td>${booking.date}</td>
                <td>${booking.time}</td>
                <td>${booking.service}</td>
                <td>${booking.note}</td>
                <td>
                    <button class="delete-button" data-index="${index}">Xóa</button>
                </td>
            `;
            bookingTableBody.appendChild(row);
        });
    }

    // Hiển thị danh sách lịch hẹn khi trang được tải
    displayBookings();

    // Xử lý sự kiện click cho nút xóa
    bookingTableBody.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete-button")) {
            const index = e.target.getAttribute("data-index");
            const bookingToDelete = bookings[index];
            confirmationMessage.innerHTML = `Bạn có chắc chắn muốn xóa lịch hẹn của ${bookingToDelete.userName} không?`;
            confirmationDiv.style.display = "block"; // Hiện hộp xác nhận
            confirmationDiv.setAttribute("data-index", index); // Lưu chỉ số để xóa sau
        }
    });

    // Xác nhận xóa lịch hẹn
    confirmDeleteButton.addEventListener("click", function() {
        const index = confirmationDiv.getAttribute("data-index");
        bookings.splice(index, 1); // Xóa lịch hẹn
        localStorage.setItem("bookings", JSON.stringify(bookings)); // Lưu lại vào localStorage
        confirmationDiv.style.display = "none"; // Ẩn hộp xác nhận
        displayBookings(); // Cập nhật danh sách
    });

    // Hủy bỏ xóa
    cancelDeleteButton.addEventListener("click", function() {
        confirmationDiv.style.display = "none"; // Ẩn hộp xác nhận
    });
});
